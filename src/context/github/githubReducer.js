import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        // state is immutable. Here I copy current state with spreadoperator
        ...state,
        loading: true,
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
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
