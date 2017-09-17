import axios from 'axios'


export const REQUEST_USER = 'REQUEST_USER'
function requestUser(id) {
	return {
		type: REQUEST_USER,
		id
	}
}

export const RECEIVE_USER = 'RECEIVE_USER'
export function receiveUser(json) {
	return {
		type: RECEIVE_USER,
		user: json,
		receivedAt: Date.now()
	}
}

export function getUser(id) {
	return dispatch => {
		dispatch(requestUser(id))

		return axios.get('/user/' + id).then(
			response => dispatch(receiveUser(response.json())),
			error => console.log('An error occured.', error)
		);
	}
}