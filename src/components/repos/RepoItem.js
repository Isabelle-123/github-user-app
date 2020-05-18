import React from 'react'
import PropTypes from 'prop-types'

function RepoItem({ repo }) {
  return (
    <div className='card'>
      <h3>
        <a href={RepoItem.html_url}>{repo.name}</a>
      </h3>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}
export default RepoItem
