import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
// import Alert from './components/layout/Alert'
import Users from './components/users/Users'
// import Search from './components/users/Search'
//import User from './components/users/User'
// import About from './components/pages/About'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    users: [],
    //   user: {},
    //   repos: [],
    loading: false,
    //   alert: null,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App
