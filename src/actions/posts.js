import { createPost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'

function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleAddPost(title, body, category, id = null) {
  return async (dispatch) => {
    if (!id) {
      // CREATE POST
      const timestamp = new Date().getTime()
      const newPostId = timestamp.toString()
      const author = 'Pedro';

      const post = await createPost({
        timestamp,
        title,
        body,
        author,
        category,
        id: newPostId,
      })

      dispatch(addPost(post))
    } else {
      // EDIT POST
    }
  }
}

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}
