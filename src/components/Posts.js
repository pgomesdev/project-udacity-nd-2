import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Post from './Post'
import { handleOrderPosts } from '../actions/posts'

class Posts extends Component {
  handleOrder = () => {
    const { dispatch } = this.props

    dispatch(handleOrderPosts())
  }

  render() {
    const { posts } = this.props
    const { category } = this.props.match && this.props.match.params

    return (
      <div className='row'>
        <div className='col-md-12' style={{ 'margin': '25px 0' }}>
          <button className='btn btn-outline-dark btn-sm' onClick={this.handleOrder}>Order Posts by Score</button>
          <Link className='btn btn-outline-dark btn-sm float-right' to='/newpost'>New Post</Link>
        </div>
        <div className='col-md-12'>
          {Object.keys(posts)
            .filter(key => !category || posts[key].category === category)
            .filter(key => !posts[key].deleted)
            .map(key => (
              <Post
                id={posts[key].id}
                title={posts[key].title}
                author={posts[key].author}
                timestamp={posts[key].timestamp}
                category={posts[key].category}
                body={posts[key].body}
                voteScore={posts[key].voteScore}
                isList={true}
                key={posts[key].id}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  }
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Posts)
