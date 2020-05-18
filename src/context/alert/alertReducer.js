import { SET_ALERT, REMOVE_ALERT } from '../types'

export default (state, action) => {
  switch (action.type) {
    case REMOVE_ALERT:
      return action.payload
    case SET_ALERT:
      return action.payload
    default:
      return state
  }
}
