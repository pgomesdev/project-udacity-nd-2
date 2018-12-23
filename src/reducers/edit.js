import { EDIT_COMMENT } from '../actions/edit'

export default function edit (state = {}, action) {
  switch (action.type) {
    case EDIT_COMMENT:
      return action.edit
    default:
      return state
  }
}
