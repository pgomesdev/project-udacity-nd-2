import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Post from './Post'

class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <ul>
        {Object.keys(posts).map(key => (
          <li key={posts[key].id}>{JSON.stringify(posts[key])}</li>
        ))}
        {/* {posts.map(post => (
          <Post />
        ))} */}
      </ul>
    );
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
