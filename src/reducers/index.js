import { combineReducers } from 'redux'
import categories from './categories'
import comments from './comments'
import edit from './edit'
import posts from './posts'

export default combineReducers({
  categories,
  posts,
  comments,
  edit,
})
