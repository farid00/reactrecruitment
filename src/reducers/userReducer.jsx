const userReducer = (state = {
	isUserPending: false,
	isUserReceived: false,
	user: {},
	dateReceived: 0
	},
	action) => {
	switch(action.type) {
		case 'REQUEST_USER':
			return Object.assign({}, state, {
				isUserPending: true
			});
		case 'RECEIVE_USER':
			return Object.assign({}, state, {
				isUserPending: false,
				isUserReceived: true,
				user: action.user,
				dateReceived: action.receivedAt

			})
		default:
			return state
	}
}

export default userReducer