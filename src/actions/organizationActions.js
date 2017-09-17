import axios from 'axios'
import { push } from 'react-router-redux/actions'


export function createOrganization(primary, secondary) {
  return dispatch => {
    dispatch(setOrganizationPending(true));
    dispatch(setOrganizationSuccess(false));
    dispatch(setOrganizationError(null));

    callPostOrganizationApi(primary, secondary, (res, error) => {
      dispatch(setOrganizationPending(false));
      if (!error) {
        dispatch(setOrganizationSuccess(true));

      } else {
        dispatch(setOrganizationError(error));
      }
    });
  }
}


export function getOrganizations() {
  return dispatch => {
    dispatch(setOrganizationPending(true));
    dispatch(setOrganizationSuccess(false));
    dispatch(setOrganizationError(null));

    callGetOrganizationApi((res, error) => {
      dispatch(setOrganizationPending(false));
      if (!error) {
        dispatch(setOrganizationSuccess(true));
        dispatch(addOrganizations(res));

      } else {
        dispatch(setOrganizationError(error));
      }
    });
  }
}

export function setActiveOrganization(organizationId) {
  return dispatch => {

    callSetActiveOrganizationApi(organizationId, (res, error) => {
      if (!error) {
        dispatch(setActiveOrganizationSuccess(organizationId));

      } else {
        console.log('error')
      }
    });
  }
}

export function joinOrganization(token) {
  return dispatch => {
    callJoinOrganizationApi(token, (res, error) => {
      if (!error) {
        dispatch(addOrganization(res));
      } else {
        console.log('error')
      }
    });
  }
}
  
export const setOrganizationSuccess = isOrganizationSuccess => {
	return {
		type: 'SET_ORGANIZATION_SUCCESS',
		isOrganizationSuccess: isOrganizationSuccess,
	}
}

export const setOrganizationPending = isOrganizationPending => {
	return {
		type: 'SET_ORGANIZATION_PENDING',
		isOrganizationPending
	}
}

export const setOrganizationError = isOrganizationError => {
	return {
		type: 'SET_ORGANIZATION_ERROR',
		isOrganizationError
	}
}

export const addOrganizations = organizations => {
  return {
    type: 'ADD_ORGANIZATIONS',
    organizations
  }
}

export const addOrganization = organization => {
  return {
    type: 'ADD_ORGANIZATION',
    organization
  }
}

export const setActiveOrganizationSuccess = activeOrganization => {
  return {
    type: 'SET_ACTIVE_ORGANIZATION',
    activeOrganization
  }
}

export const setIsJoinOrganization = isJoinOrganization => {
  return {
    type: 'SET_JOIN_ORGANIZATION'
  }
}

async function callPostOrganizationApi(primaryName, secondaryName, callback) {
  var params = {
    primary_name: primaryName,
    secondary_name: secondaryName,
    token: localStorage.getItem('bearer')
  }
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:3005',
  })
  let response = await instance.post('/organizations', params);
  callback(response.data, null);
}


async function callGetOrganizationApi(callback) {
  let token = localStorage.getItem('bearer')
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:3005',
    headers: {'x-access-token': token}
  });
  let response = await instance.get('/organizations');
  console.log(response);
  callback(response.data, null);
}

async function callSetActiveOrganizationApi(organizationId, callback) {
  let token = localStorage.getItem('bearer')
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:3005',
    headers: {'x-access-token': token}
  });
  let response = await instance.patch('/users', {organization_id: organizationId}) 
  callback(response.data, null)
}

async function callJoinOrganizationApi(token, callback) {
  let accessToken = localStorage.getItem('bearer')
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:3005',
    headers: {'x-access-token': accessToken}
  });
  let response = await instance.post('/organizations/join-organization', {token_code: token}) 
  callback(response.data, null)
}