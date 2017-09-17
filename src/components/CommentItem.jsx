import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { push } from 'react-router-redux/actions'
import CommentFormContainer from '../containers/CommentFormContainer'
const CommentItem = ({comment, onReplyClick}) => (
	<div>
	<li>{comment.id} : {comment.text}</li>
	<button onClick={() => {onReplyClick(comment.id)}}>Reply</button>
	{ comment.reply && <CommentFormContainer recruitId={comment.recruit_id} parentId={comment.id}></CommentFormContainer>}
	</div>
)

export default CommentItem