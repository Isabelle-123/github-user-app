import React, { useContext } from 'react'
import GithubContext from '../../context/github/githubContext'

const RepoItem = () => {
  const githubContext = useContext(GithubContext)

  const { repo } = githubContext

  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  )
}

export default RepoItem
