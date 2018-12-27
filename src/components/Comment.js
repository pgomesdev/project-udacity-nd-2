import React, { Component } from 'react'
import { connect } from 'react-redux'
import { edit } from '../actions/edit'
import { handleDeleteComment, handleVoteComment, UPVOTE, DOWNVOTE } from '../actions/comments'

class Comment extends Component {
  handleEdit = (comment) => {
    const { dispatch } = this.props

    dispatch(edit(comment))
  }

  handleDelete = (id) => {
    const { dispatch } = this.props

    dispatch(handleDeleteComment(id))
  }

  handleVote = (id, vote) => {
    const { dispatch } = this.props

    dispatch(handleVoteComment(id, vote))
  }

  render() {
    const {
      id,
      author,
      body,
      voteScore,
    } = this.props.comment
    const { authedUser } = this.props

    return (
      <div className='card' style={{ marginBottom: '25px' }}>
        {
          author
          ? <div className='card-body'>
              <p>Author: {author}</p>
              <p>{body}</p>
              <p>
                <i className="fas fa-star"></i> {voteScore}
              </p>
              {author === authedUser
                && <button
                    className='btn btn-outline-info float-right'
                    onClick={() => this.handleEdit(this.props.comment)}
                    >Edit</button>}
              {author === authedUser
                && <button
                    className='btn btn-outline-danger float-right'
                    onClick={() => this.handleDelete(id)}
                    >Delete</button>}
              <div>
                <button
                  className='btn btn-outline-success'
                  onClick={() => this.handleVote(id, UPVOTE)}
                ><i className='fas fa-thumbs-up'></i></button>
                <button
                  className='btn btn-outline-danger'
                  onClick={() => this.handleVote(id, DOWNVOTE)}
                ><i className='fas fa-thumbs-down'></i></button>
              </div>
            </div>
          : <p>Be the first to comment in this post!</p>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Comment)
