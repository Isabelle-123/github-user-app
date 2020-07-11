import React, { useReducer } from 'react'
import axios from 'axios'
import Githubcontext from './Githubcontext'
import GithubReducer from './githubReducer'
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
} from '../types'
import githubContext from './Githubcontext'

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </githubContext.Provider>
  )
}

export default GithubState
