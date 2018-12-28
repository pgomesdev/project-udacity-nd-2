import { createPost, deletePost, updatePost, votePost } from '../utils/api'
import { arrayToObject } from '../utils/helpers'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const MUTATE_POST = 'MUTATE_POST'
export const ORDER_POSTS = 'ORDER_POSTS'
export const UPVOTE = 'upVote'
export const DOWNVOTE = 'downVote'

export function mutatePost (post) {
  return {
    type: MUTATE_POST,
    post,
  }
}

export function handleCreatePost (title, body, category, author) {
  return async (dispatch) => {
    const timestamp = new Date().getTime()
    const newPostId = timestamp.toString()

    const post = await createPost({
      timestamp,
      title,
      body,
      author,
      category,
      id: newPostId,
    })

    dispatch(mutatePost(post))
  }
}

export function handleEditPost (id, title, body) {
  return async (dispatch) => {
    const post = await updatePost({
      id,
      title,
      body,
    })

    dispatch(mutatePost(post))
  }
}

export function handleDeletePost (id) {
  return async (dispatch) => {
    const post = await deletePost(id)

    dispatch(mutatePost(post))
  }
}

export function handleVotePost (id, vote) {
  return async (dispatch) => {
    const post = await votePost(id, vote)

    dispatch(mutatePost(post))
  }
}

function orderPosts (posts) {
  return {
    type: ORDER_POSTS,
    posts,
  }
}

export function handleOrderPosts() {
  return async (dispatch, getState) => {
    const { posts } = getState()

    const postsArray = Object.keys(posts).map(key => posts[key]).sort((a,b) => b.voteScore - a.voteScore)

    const newPostState = arrayToObject(postsArray)

    dispatch(orderPosts(newPostState))
  }
}

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}
