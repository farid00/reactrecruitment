export default function recruitReducer(state = {
	isRecruitSuccess: false,
	isRecruitPending: false,
	recruitError: null,
	recruits: [],
	activeRecruit: {},
}, action) {
	switch(action.type) {
		case 'SET_RECRUIT_PENDING':
			return Object.assign({}, state, {
				isRecruitPending: action.isRecruitPending
			});
		case 'SET_RECRUIT_SUCCESS':
			console.log(state)
			return Object.assign({}, state, {
				isRecruitSuccess: action.isRecruitSuccess,
			}); 
		case 'SET_RECRUIT_ERROR':
			return Object.assign({}, state, {
				recruitError: action.recruitError
			});
		case 'ADD_RECRUIT':
			return Object.assign({}, state, {
				recruits: insertItem(state.recruits, action.recruit)
			});
		case 'SET_RECRUITS':
			return Object.assign({}, state, {
				recruits: action.recruits
			});
		case 'SET_ACTIVE_RECRUIT':
			return Object.assign({}, state, {
				activeRecruit: action.recruit
			})
		default:
			return state;
	}
}

function insertItem(array, item) {
    return [
        ...array,
        item,
    ]
}