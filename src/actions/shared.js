import { receiveCategories } from './categories'
import { receivePosts } from './posts'
import { setAuthedUser } from './authedUser'
import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

const USER_ID = 'pedro'

export function handleInitialData () {
  return dispatch => {
    dispatch(showLoading())

    return getInitialData()
      .then(([{categories}, posts]) => {
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
        dispatch(setAuthedUser(USER_ID))
        dispatch(hideLoading())
      })
  }
}
