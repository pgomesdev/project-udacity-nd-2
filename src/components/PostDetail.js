import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Post from './Post'
import Comments from './Comments'
import AddComment from './AddComment'
import { receiveComments } from '../actions/comments'
import { getCommentsByPostId } from '../utils/api'

class PostDetail extends Component {
  scrollToBottom = () => {
    this.bottom.scrollIntoView({ behavior: 'smooth' })
  }

  async componentDidMount() {
    const postId = this.props.match.params.post_id
    const { dispatch } = this.props

    const comments = await getCommentsByPostId(postId)

    dispatch(receiveComments(comments.length === 0 ? ['No comments to display'] : comments))
  }

  render() {
    const postId = this.props.match.params.post_id
    const post = Object.keys(this.props.posts).map(key => this.props.posts[key]).find(post => post.id === postId)

    if (!post) {
      return <Redirect to='/notfound' />
    }
    
    return (
      <Fragment>
        {post &&
          <Post
            id={post.id}
            title={post.title}
            author={post.author}
            timestamp={post.timestamp}
            category={post.category}
            body={post.body}
            voteScore={post.voteScore}
            commentCount={post.commentCount}
          />
        }
        <h4>Comments</h4>
        <Comments scroll={this.scrollToBottom} />
        <AddComment
          postId={postId}
        />
        <div ref={(el) => {this.bottom = el}}></div>
      </Fragment>
    )
  }
}

PostDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  history: PropTypes.object,
  location: PropTypes.object,
}

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  }
}

export default connect(mapStateToProps)(PostDetail)