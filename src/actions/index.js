import axios from 'axios'
import { receiveUser } from './userActions'
import { push } from 'react-router-redux/actions'

axios.defaults.baseURL = "http://127.0.0.1:3005"

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, (res, error) => {
      dispatch(setLoginPending(false));
      if (!error) {
        localStorage.setItem('bearer', res.token);
        dispatch(setLoginSuccess(true));
        dispatch(receiveUser(res.user));
        dispatch(push('/recruits'))
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

export const setLoginSuccess = isLoginSuccess => {
	return {
		type: 'SET_LOGIN_SUCCESS',
		isLoginSuccess
	}
}

export const setLoginPending = isLoginPending => {
	return {
		type: 'SET_LOGIN_PENDING',
		isLoginPending
	}
}

export const setLoginError = isLoginError => {
	return {
		type: 'SET_LOGIN_ERROR',
		isLoginError
	}
}

async function callLoginApi(email, password, callback) {
  var params = new URLSearchParams();
  params.append('username', email);
  params.append('password', password);
  let response = await axios.post('/auth/login', params);
  callback(response.data, null);
}