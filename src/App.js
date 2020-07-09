import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import Search from './components/users/Search'
import User from './components/users/User'
import About from './components/pages/About'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  }

  // show all users from the beginning
  // async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({ users: res.data, loading: false })
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data.items, loading: false })
  }

  getUser = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ user: res.data, loading: false })
  }

  getUserRepos = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ user: res.data, loading: false })
  }

  clearUsers = () => {
    this.setState({ repos: [], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })

    setTimeout(() => this.setState({ alert: null }), 3000)
  }

  render() {
    const { users, loading, user, repos } = this.state
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
