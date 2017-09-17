import React from 'react'
import { connect } from 'react-redux' 
import  JoinOrganizationForm  from '../components/JoinOrganizationForm'
import { Field, reduxForm } from 'redux-form'
import { joinOrganization, setIsJoinOrganization } from '../actions/organizationActions'



const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: value => (dispatch(joinOrganization(value.token))),
	}
}
const ReduxJoinOrganizationForm = reduxForm({ form: 'JoinOrganizationForm' })(JoinOrganizationForm);

const JoinOrganizationFormContainer = connect(null, mapDispatchToProps)(ReduxJoinOrganizationForm);

export default JoinOrganizationFormContainer
