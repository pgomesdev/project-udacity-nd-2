import { receiveCategories } from './categories'
import { receivePosts } from './posts'
import { getInitialData } from '../utils/api'

export function handleInitialData () {
  return dispatch => {
    return getInitialData()
      .then(([{categories}, posts]) => {
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
      })
  }
}
