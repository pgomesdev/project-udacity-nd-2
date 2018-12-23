import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Post from './Post'

class Posts extends Component {
  render() {
    const { posts } = this.props
    const { category } = this.props.match && this.props.match.params

    return (
      <ul>
        {Object.keys(posts)
          .filter(key => !category || posts[key].category === category)
          .map(key => (
            <li key={posts[key].id}>
              <Post
                id={posts[key].id}
                title={posts[key].title}
                author={posts[key].author}
                timestamp={posts[key].timestamp}
                category={posts[key].category}
                body={posts[key].body}
                voteScore={posts[key].voteScore}
              />
            </li>
        ))}
      </ul>
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
