import { createComment, deleteCommentById, updateComment, voteComment } from '../utils/api'

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
  return async (dispatch) => {
    const timestamp = new Date().getTime()
    const id = timestamp.toString()
    const body = content
    const parentId = postId

    const comment = await createComment({
      id,
      timestamp,
      body,
      author,
      parentId
    })

    dispatch(mutateComment(comment))
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

export function handleDeleteComment (id) {
  return async (dispatch) => {
    const comment = await deleteCommentById(id)

    dispatch(mutateComment(comment))
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
