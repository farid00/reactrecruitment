import { connect } from 'react-redux'
import  User  from '../components/user'
import { push } from 'react-router-redux/actions'
import { setActiveOrganizationSuccess, setIsJoinOrganization } from '../actions/organizationActions'

const mapStateToProps = (state, ownProps) => {

	return {
		users: state.userReducer.user,
		activeOrganization: state.organizationReducer.activeOrganization,
		isJoinOrganization: state.organizationReducer.isJoinOrganization

	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		clearOrganization: () => (dispatch(setActiveOrganizationSuccess(-1))),
		handleJoinOrganizationClick: (isJoinOrganization) => (dispatch(setIsJoinOrganization()))
	}
}

const UserInformation = connect(mapStateToProps, mapDispatchToProps)(User);
export default UserInformation;