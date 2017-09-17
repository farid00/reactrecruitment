export default function organizationReducer(state = {
	isOrganizationSuccess: false,
	isOrganizationPending: false,
	organizationError: null,
	isJoinOrganization: false,
	organizations: [],
	activeOrganization: -1,
}, action) {
	switch(action.type) {
		case 'SET_ORGANIZATION_PENDING':
			return Object.assign({}, state, {
				isOrganizationPending: action.isOrganizationPending
			});
		case 'SET_ORGANIZATION_SUCCESS':
			console.log(state)
			return Object.assign({}, state, {
				isOrganizationSuccess: action.isOrganizationSuccess,
			}); 
		case 'SET_ORGANIZATION_ERROR':
			return Object.assign({}, state, {
				organizationError: action.organizationError
			});
		case 'ADD_ORGANIZATIONS':
			return Object.assign({}, state, {
				organizations: insertItem(state.organizations, action.organizations)
			});
		case 'ADD_ORGANIZATION':
			return Object.assign({}, state, {
				organizations: insertSingle(state.organizations, action.organization)
			})
		case 'SET_ACTIVE_ORGANIZATION': 
			return Object.assign({}, state, {
				activeOrganization: action.activeOrganization
			})
		case 'SET_JOIN_ORGANIZATION': 
			return Object.assign({}, state, {
				isJoinOrganization: !state.isJoinOrganization
			})
		default:
			return state;
	}
}

function insertItem(array, item) {
    return [
        ...item,
    ]
}

function insertSingle(array, item) {
	return [
		...array,
		item
	]
}