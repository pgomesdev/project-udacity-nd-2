import { createComment, deleteCommentById, updateComment, voteComment } from '../utils/api'
import { mutatePost } from './posts'

export const MUTATE_COMMENT = 'MUTATE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UPVOTE = 'upVote'
export const DOWNVOTE = 'downVote'

function mutateComment (comment) {
  return {
    type: MUTATE_COMMENT,
    comment,
  }
}

export function handleCreateComment (postId, content, author) {
  return async (dispatch, getState) => {
    const timestamp = new Date().getTime()
    const id = timestamp.toString()
    const body = content
    const parentId = postId
    const { posts } = getState()
    const post = posts[postId]

    const comment = await createComment({
      id,
      timestamp,
      body,
      author,
      parentId
    })
    
    post.commentCount++

    dispatch(mutateComment(comment))
    dispatch(mutatePost(post))
  }
}

export function handleEditComment (id, content) {
  return async (dispatch) => {
    const timestamp = new Date().getTime()
    const body = content

    const comment = await updateComment(id, {
      timestamp,
      body,
    })

    dispatch(mutateComment(comment))
  }
}

export function handleDeleteComment (id, postId) {
  return async (dispatch, getState) => {
    const comment = await deleteCommentById(id)
    const { posts } = getState()
    const post = posts[postId]

    dispatch(mutateComment(comment))

    post.commentCount--

    dispatch(mutatePost(post))
  }
}

export function handleVoteComment (id, vote) {
  return async (dispatch) => {
    const comment = await voteComment(id, vote)

    dispatch(mutateComment(comment))
  }
}

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments,
  }
}
