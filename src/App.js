import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import Search from './components/users/Search'
import User from './components/users/User'
import About from './components/pages/About'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css'

const App = () => {
  // show users from beginning

  // async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://api.github.com/users?client_id=$'
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
  //   this.setState({ users: res.data, loading: false })
  // }

  return (
    //wrap everything in the GithubState provider from GithubState file
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(props) => (
                    <>
                      <Search />
                      <Users />
                    </>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
