import axios from 'axios'
import { push } from 'react-router-redux/actions'

axios.defaults.baseURL = "http://127.0.0.1:3005"

export function createComment(text, recruitId, parentId) {
  return dispatch => {
    callPostCommentApi(text, recruitId, parentId, (res, error) => {
      if (!error) {
        dispatch(addComment(res));
      } else {
        console.log('erroor in comments')
      }
    });
  }
}

export function getComments(recruitId) {
    return dispatch => {
    callGetCommentApi(recruitId, (res, error) => {
      if (!error) {
        dispatch(setComments(res));
      } else {
        console.log('erroor in comments')
      }
    });
  }
}



export const setComments = (data) => {
  return {
    type: 'SET_COMMENTS',
    comments: data
  }
}

export const addComment = (data) => {
  return {
    type: 'ADD_COMMENT',
    comment: data
  }
}

export const setCommentReply = (commentId) => {
  return {
    type: 'SET_REPLY_ACTIVE',
    commentId: commentId
  }
}



async function callPostCommentApi(text, recruitId, parentId, callback) {
  var params = {
    text: text,
    recruit_id: recruitId,
    parent_id: parentId,
    token: localStorage.getItem('bearer')
  }
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:3005',
  })
  let response = await instance.post('/recruits/14/comments', params);
  callback(response.data, null);
}

async function callGetCommentApi(recruitId, callback) {
  let token = localStorage.getItem('bearer')
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:3005',
    headers: {'x-access-token': token}
  })
  let response = await instance.get('/recruits/'+recruitId+'/comments');
  callback(response.data, null);
}

