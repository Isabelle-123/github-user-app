import React, { useEffect } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'

const User = ({ user, getUser, getUserRepos, match, loading, repos }) => {
  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    //eslint-disable-next-line
  }, [])

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if (loading) return <Spinner />

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times circle-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: '150px' }}
            alt='user'
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username:</strong> {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company:</strong> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website:</strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public repos: {public_repos}</div>
        <div className='badge badge-dark'>Public gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  )
}

export default User
