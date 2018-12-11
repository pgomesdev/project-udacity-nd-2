import React, { Component } from 'react'

class Post extends Component {
  render() {
    const title = 'A new hope'
    const author = 'Pedro Gomes'
    const timestamp = Date.now()
    const category = 'React'
    const body = `A hole new hope arises.
    
    Stay tuned for more news!!!`
    const voteScore = 4

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

export default Post
