import React from 'react'
import RecruitDetailContainer from '../containers/RecruitDetailContainer'
import CommentFormContainer from '../containers/CommentFormContainer'
import CommentListContainer from '../containers/CommentListContainer'
const RecruitWithComments = ({match}) => (
	<div>
		<RecruitDetailContainer match={match}></RecruitDetailContainer>
		<CommentListContainer match={match}></CommentListContainer>
	</div>
)

export default RecruitWithComments	