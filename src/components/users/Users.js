import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
  state = {
    users: [
      { id: 'id', login: 'login', avatar_url: 'url', html_url: 'htmlurl' },
      { id: 'id', login: 'login', avatar_url: 'url', html_url: 'htmlurl' },
      { id: 'id', login: 'login', avatar_url: 'url', html_url: 'htmlurl' },
    ],
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
}

export default Users
