import { RECEIVE_POSTS, MUTATE_POST, ORDER_POSTS } from '../actions/posts'

export default function posts (state = {}, action) {
  switch (action.type) {
    case MUTATE_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts,
      }
    case ORDER_POSTS:
      return {
        ...action.posts
      }
    default:
      return state
  }
}
