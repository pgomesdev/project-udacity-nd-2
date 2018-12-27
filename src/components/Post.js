import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleDeletePost, handleVotePost, UPVOTE, DOWNVOTE } from '../actions/posts'
import { formatDate } from '../utils/helpers'

class Post extends Component {
  state = {
    toHome: false,
  }

  handleDelete = async (id) => {
    const { dispatch } = this.props
    await dispatch(handleDeletePost(id))

    this.setState(() => ({
      toHome: true,
    }))
  }

  handleVote = (id, vote) => {
    const { dispatch } = this.props

    dispatch(handleVotePost(id, vote))
  }

  render() {
    const {
      id,
      title,
      author,
      timestamp,
      category,
      body,
      voteScore,
      commentCount,
      isList,
      authedUser,
    } = this.props
    const { toHome } = this.state

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <div className='card' style={{ marginBottom: '25px' }}>
        <div className='card-body'>
          {isList 
          ? <Link to={`/${category}/${id}`}>
              <h5 className='card-title'>{title}</h5>
            </Link>
          : <h5 className='card-title'>{title}</h5>}
          <hr />
          <small>Posted by: {author} at {formatDate(timestamp)}</small>
          <p>{body}</p>
          <div>
            <span>Category: {category} </span>
          </div>
          <div>
            <i className="fas fa-star"> </i>
            <span> {voteScore} </span>
            <i className="fas fa-comment"> </i>
            <span> {commentCount}</span>
          </div>
          <div>
            <button
              className='btn btn-outline-success'
              onClick={() => this.handleVote(id, UPVOTE)}
              >
              <i className='fas fa-thumbs-up'></i>
            </button>
            <button
              className='btn btn-outline-danger'
              onClick={() => this.handleVote(id, DOWNVOTE)}
              >
              <i className='fas fa-thumbs-down'></i>
            </button>
            {!isList && author === authedUser
              && <Fragment>
                  <Link className='btn btn-outline-info float-right' to={`/post/${id}/edit`}>
                    Edit
                  </Link>
                  <button className='btn btn-outline-danger float-right' onClick={() => this.handleDelete(id)}>Delete</button>
                </Fragment>
            }
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
  authedUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  voteScore: PropTypes.number,
  commentCount: PropTypes.number,
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Post)
