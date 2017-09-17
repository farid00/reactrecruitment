import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap'
import { push } from 'react-router-redux/actions'
import CommentItem from './CommentItem'

const CommentList = ({comments, parent, ...props}) => (
	<ul>
		{comments.filter(x => (x.parent_id==parent)).map(comment => (
				<div key={comment.id}>
					<CommentItem comment={comment} {...props}></CommentItem>
					<CommentList comments={comments} parent={comment.id} {...props}></CommentList>
				</div>
			))}
	
	</ul>
)

export default CommentList