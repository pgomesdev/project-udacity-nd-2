import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleDeletePost } from '../actions/posts'

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

  render() {
    const {
      id,
      title,
      author,
      timestamp,
      category,
      body,
      voteScore,
      isList,
    } = this.props
    const { toHome } = this.state

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <div>
          {isList 
          ? <Link to={`/${category}/${id}`}>
              <h3>{title}</h3>
            </Link>
          : <h3>{title}</h3>}
          <hr />
          <h6>Posted by: {author} at {timestamp}</h6>
          <p>{body}</p>
          <div>
            <span>Category: {category}</span>
            <span> Stars</span>
            <span> {voteScore ? voteScore : ''}</span>
          </div>
          {!isList
            && <div>
              <Link to={`/post/${id}/edit`}>
                Edit
              </Link>
              <button onClick={() => this.handleDelete(id)}>Delete</button>
            </div>
          }
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

export default connect()(Post)
