import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { edit } from '../actions/edit'
import { handleDeleteComment } from '../actions/comments'

class Comment extends Component {
  handleEdit = (comment) => {
    const { dispatch } = this.props

    dispatch(edit(comment))
  }

  handleDelete = (id) => {
    const { dispatch } = this.props

    dispatch(handleDeleteComment(id))
  }

  render() {
    const {
      id,
      author,
      body,
      voteScore,
    } = this.props.comment

    return (
      <Fragment>
        {
          author
          ? <div>
              <p>Author: {author}</p>
              <p>{body}</p>
              <p>Score: {voteScore}</p>
              {author === 'Pedro' && <button onClick={() => this.handleEdit(this.props.comment)}>Edit</button>}
              {author === 'Pedro' && <button onClick={() => this.handleDelete(id)}>Delete</button>}
            </div>
          : <p>Be the first to comment in this post!</p>
        }
      </Fragment>
    )
  }
}

export default connect()(Comment)
