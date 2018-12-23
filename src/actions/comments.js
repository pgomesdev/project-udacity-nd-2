import { createComment, deleteCommentById, updateComment } from '../utils/api'

export const MUTATE_COMMENT = 'MUTATE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

function mutateComment (comment) {
  return {
    type: MUTATE_COMMENT,
    comment,
  }
}

export function handleCreateComment (postId, content) {
  return async (dispatch) => {
    const timestamp = new Date().getTime()
    const id = timestamp.toString()
    const body = content
    const author = 'Pedro'
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

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments,
  }
}
