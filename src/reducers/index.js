import { combineReducers } from 'redux'
import categories from './categories'
import comments from './comments'
import edit from './edit'
import posts from './posts'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  categories,
  posts,
  comments,
  edit,
  authedUser,
  loadingBar: loadingBarReducer,
})
