import React from 'react'
import { connect } from 'react-redux' 
import  RecruitForm  from '../components/RecruitForm'
import { Field, reduxForm } from 'redux-form'
import { createRecruit } from '../actions/RecruitActions'



const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: value => (dispatch(createRecruit(value.first_name, value.last_name)))
	}
}
const ReduxRecruitForm = reduxForm({ form: 'RecruitForm' })(RecruitForm);

const RecruitFormContainer = connect(null, mapDispatchToProps)(ReduxRecruitForm);

export default RecruitFormContainer
