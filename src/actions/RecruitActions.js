import axios from 'axios'
import { push } from 'react-router-redux/actions'

axios.defaults.baseURL = "http://127.0.0.1:3005"

export function createRecruit(first, last) {
  return dispatch => {
    dispatch(setRecruitPending(true));
    dispatch(setRecruitSuccess(false));
    dispatch(setRecruitError(null));

    callPostRecruitApi(first, last, (res, error) => {
      dispatch(setRecruitPending(false));
      if (!error) {
        dispatch(setRecruitSuccess(true));
        dispatch(addRecruit(res));
        dispatch(push('/profile'));
      } else {
        dispatch(setRecruitError(error));
      }
    });
  }
}

export function getRecruits() {
  return dispatch => {
    dispatch(setRecruitPending(true));
    dispatch(setRecruitSuccess(false));
    dispatch(setRecruitError(null));

    callGetRecruitApi((res, error) => {
      dispatch(setRecruitPending(false));
      if (!error) {
        dispatch(setRecruitSuccess(true));
        dispatch(setRecruits(res));
      } else {
        dispatch(setRecruitError(error));
      }
    });
  }
}

export function getRecruit(id) {
  return dispatch => {
    dispatch(setRecruitPending(true));
    dispatch(setRecruitSuccess(false));
    dispatch(setRecruitError(null));

    callGetOneRecruitApi(id, (res, error) => {
      dispatch(setRecruitPending(false));
      if (!error) {
        dispatch(setRecruitSuccess(true));
        dispatch(setActiveRecruit(res));
      } else {
        dispatch(setRecruitError(error));
      }
    });
  }
}

export const setRecruitSuccess = isRecruitSuccess => {
  return {
    type: 'SET_RECRUIT_SUCCESS',
    isRecruitSuccess: isRecruitSuccess,
  }
}

export const setRecruitPending = isRecruitPending => {
  return {
    type: 'SET_RECRUIT_PENDING',
    isRecruitPending
  }
}

export const setRecruitError = isRecruitError => {
  return {
    type: 'SET_RECRUIT_ERROR',
    isRecruitError
  }
}

export const addRecruit = recruit => {
  return {
    type: 'ADD_RECRUIT',
    recruit
  }
}

export const setRecruits = recruits => {
  return {
    type: 'SET_RECRUITS',
    recruits
  }
}

export const setActiveRecruit = recruit => {
  return {
    type: 'SET_ACTIVE_RECRUIT',
    recruit
  }
}

async function callPostRecruitApi(first, last, callback) {
  var params = {
    first_name: first,
    last_name: last,
    token: localStorage.getItem('bearer')
  }
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:3005',
  })
  let response = await instance.post('/recruits', params);
  callback(response.data, null);
}

async function callGetRecruitApi(callback) {
  let token = localStorage.getItem('bearer')
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:3005',
    headers: {'x-access-token': token}
  });
  let response = await instance.get('/recruits')
  callback(response.data, null)
}

async function callGetOneRecruitApi(id, callback) {
  let token = localStorage.getItem('bearer')
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:3005',
    headers: {'x-access-token': token}
  });
  let response = await instance.get('/recruits/' + id)
  callback(response.data, null)
}