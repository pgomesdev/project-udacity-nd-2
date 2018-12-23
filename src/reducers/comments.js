import { MUTATE_COMMENT, RECEIVE_COMMENTS } from '../actions/comments'

export default function comments (state = {}, action) {
  switch (action.type) {
    case MUTATE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case RECEIVE_COMMENTS:
      return {
        ...action.comments,
      }
    default:
      return state
  }
}
