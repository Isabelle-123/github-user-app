import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import githubReducer from './githubReducer'
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
} from '../types'

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async (text) => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    )
    dispatch({ type: SEARCH_USERS, payload: res.data.items })
  }

  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
