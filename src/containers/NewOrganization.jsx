import React from 'react'
import { connect } from 'react-redux' 
import  OrganizationForm  from '../components/OrganizationForm'
import { Field, reduxForm } from 'redux-form'
import { createOrganization } from '../actions/organizationActions'



const mapDispatchToProps = (dispatch) => {
	return {
		handleOrganizationSubmit: value => (dispatch(createOrganization(value.primary_name, value.secondary_name)))
	}
}

let NewOrganization = connect(null, mapDispatchToProps)(OrganizationForm);


export default reduxForm({ form: 'OrganizationForm' })(NewOrganization);
