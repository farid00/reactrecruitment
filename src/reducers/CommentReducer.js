import { comments } from './schemas';
import { normalize, denormalize } from 'normalizr';
export default function commentReducer(state = {
	comments: {},
	commentsArray: [],
	commentsById: []
}, action) {
	switch(action.type) {
		case 'SET_COMMENTS':
			var normalizedComment = normalize(action.comments, comments)
			/*var y = denormalize(normalizedComment.result, comments, normalizedComment.entities)
			console.log(normalizedComment);
			console.log(y);*/
			return Object.assign({}, state, {
				comments: normalizedComment.entities.comments,
				commentsById: normalizedComment.results
			});
		case 'SET_REPLY_ACTIVE':
			let replyStatus = true
			if (state.comments[action.commentId].reply) {
				replyStatus = false
			}
			return Object.assign({}, state, {
				comments: {
					...state.comments,
					[action.commentId]: {
						...state.comments[action.commentId],
						...{reply: replyStatus}

					}
 
				}
			});
		case 'ADD_COMMENT':
			let newComment = action.comment[0]
			return Object.assign({}, state, {
				comments: {
					...state.comments,
					[newComment.id]: {
						...newComment
					}
				}
			});

		default:
			return state;

	}
}
