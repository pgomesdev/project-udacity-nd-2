export const EDIT_COMMENT = 'EDIT_COMMENT'

export function edit (edit) {
  return {
    type: EDIT_COMMENT,
    edit,
  }
}