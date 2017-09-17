import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import React from 'react'
import { push } from 'react-router-redux/actions'
import { getComments, setCommentReply } from '../actions/CommentActions'



class CommentListContainer extends React.Component {

	componentWillMount() {
		this.props.getComments(this.props.match.params.id);
	}

	render() {
		return (
			<div>
			<CommentList comments={this.props.comments} parent={null} onReplyClick={this.props.onReplyClick}></CommentList>
			</div>
		)
	}
}

const mapStateToProps = (state, ownParams) => {

	return {
		comments: Object.values(state.commentReducer.comments),
		match: ownParams.match
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getComments: (id) => { dispatch(getComments(id)) },
		onReplyClick: (id) => { (dispatch(setCommentReply(id))) }
	}
}
const CommentListContainerExport = connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);
export default CommentListContainerExport;