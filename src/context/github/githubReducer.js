import {
  SEARCH_USERS,
  GET_USERS,
  CLEAR_USERS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        // state is immutable. Here I copy current state with spreadoperator
        ...state,
        loading: true,
      }
    case GET_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case SEARCH_USERS:
      return {
        ...state,
        //all users pulled from the agithub api is:
        users: action.payload,
        loading: false,
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      }
    default:
      return state
  }
}
