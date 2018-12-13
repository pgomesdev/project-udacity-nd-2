import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Post extends Component {
  render() {
    const {
      title,
      author,
      timestamp,
      category,
      body,
      voteScore,
    } = this.props

    return (
      <div>
        <div>
          <h3>{title}</h3>
          <hr />
          <h6>Posted by: {author} at {timestamp}</h6>
          <p>{body}</p>
          <div>
            <span>Category: {category}</span>
            <span> Stars</span>
            <span> {voteScore ? voteScore : ''}</span>
          </div>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  voteScore: PropTypes.number,
}

export default Post
