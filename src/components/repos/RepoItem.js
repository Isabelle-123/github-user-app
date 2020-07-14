import React from 'react'

function RepoItem({ repo }) {
  return (
    <div className='card'>
      <h3>
        <a href={RepoItem.html_url}>{repo.name}</a>
      </h3>
    </div>
  )
}

export default RepoItem
