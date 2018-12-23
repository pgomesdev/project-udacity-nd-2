import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Comments from './Comments'
import AddComment from './AddComment'
import { receiveComments } from '../actions/comments'
import { getCommentsByPostId } from '../utils/api'

class PostDetail extends Component {
  async componentDidMount() {
    const postId = this.props.match.params.post_id
    const { dispatch } = this.props

    const comments = await getCommentsByPostId(postId)

    dispatch(receiveComments(comments.length === 0 ? ['No comments to display'] : comments))
  }

  render() {
    const postId = this.props.match.params.post_id
    const post = Object.keys(this.props.posts).map(key => this.props.posts[key]).find(post => post.id === postId)
    
    return (
      <Fragment>
        {post &&
          <Post
            title={post.title}
            author={post.author}
            timestamp={post.timestamp}
            category={post.category}
            body={post.body}
            voteScore={post.voteScore}
          />
        }
        <h4>Comments</h4>
        <Comments />
        <h5>New Comment</h5>
        <AddComment
          postId={postId}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  }
}

export default connect(mapStateToProps)(PostDetail)