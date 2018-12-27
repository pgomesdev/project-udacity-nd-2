import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleCreatePost, handleEditPost } from '../actions/posts'

class AddPost extends Component {
  state = {
    title: '',
    content: '',
    category: '',
    toHome: false
  }

  handleTitleChange = (e) => {
    const title = e.target.value

    this.setState(() => ({
      title
    }))
  }

  handleContentChange = (e) => {
    const content = e.target.value

    this.setState(() => ({
      content
    }))
  }

  handleCategoryChange = (e) => {
    const category = e.target.value

    this.setState(() => ({
      category
    }))
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { dispatch } = this.props
    const { title, content, category, toHome } = this.state
    const postId = this.props.match.params.post_id

    if (!postId) {
      await dispatch(handleCreatePost(
        title,
        content,
        category,
      ))

      this.setState(() => ({
        toHome: !toHome
      }))
    } else {
      await dispatch(handleEditPost(
        postId,
        title,
        content,
      ))
    }
  }

  componentWillReceiveProps(props) {
    const postId = this.props.match.params.post_id
    const { posts } = props

    if (postId) {
      this.setState(() => ({
        title: posts[postId] && posts[postId].title,
        content: posts[postId] && posts[postId].body,
        category: posts[postId] && posts[postId].category,
      }))
    }
  }

  componentDidMount() {
    const postId = this.props.match.params.post_id
    const { posts } = this.props

    if (postId) {
      this.setState(() => ({
        title: posts[postId] && posts[postId].title,
        content: posts[postId] && posts[postId].body,
        category: posts[postId] && posts[postId].category,
      }))
    }
  }

  render() {
    const postId = this.props.match.params.post_id
    const { toHome } = this.state
    const { categories } = this.props

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>{postId ? 'Edit Post' : 'New Post'}</h3>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Title: </label>
              <input
                className='form-control'
                type='text'
                onChange={this.handleTitleChange} 
                value={this.state.title}
              />
            </div>
            <div className='form-group'>
              <label>Content: </label>
              <textarea
                className='form-control'
                onChange={this.handleContentChange}
                value={this.state.content}
              ></textarea>
            </div>
            <div className='form-group'>
              <label>Category: </label>
              <select className='form-control' value={this.state.category} onChange={this.handleCategoryChange}>
                <option key={'null'} value=''></option>
                {Object.keys(categories).map((key) => (
                  <option key={key} value={categories[key].name}>{categories[key].name}</option>
                ))}
              </select>
            </div>
            <input
              className='btn btn-dark'
              type='submit'
              value='Save Post'
            />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories, posts }) => {
  return {
    categories,
    posts,
  }
}

export default connect(mapStateToProps)(AddPost)
