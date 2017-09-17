import React from 'react'
import { connect } from 'react-redux' 
import  CommentForm  from '../components/CommentForm'
import { Field, reduxForm } from 'redux-form'
import { getComments, createComment } from '../actions/CommentActions'

const mapStateToProps = (state, ownprops) => {
	return {
		initialValues: {
			recruitId: ownprops.recruitId,
			parentId: ownprops.parentId
		},
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: value => (dispatch(createComment(value.text, value.recruitId, value.parentId))),
	}
}
const ReduxCommentForm = reduxForm({ form: 'CommentForm' })(CommentForm);

const CommentFormContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxCommentForm);

export default CommentFormContainer
