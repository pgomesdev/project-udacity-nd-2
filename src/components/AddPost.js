import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddPost } from '../actions/posts'

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

    await dispatch(handleAddPost(
      title,
      content,
      category,
    ))

    this.setState(() => ({
      toHome: !toHome
    }))
  }

  render() {
    const { toHome } = this.state
    const { categories } = this.props

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3>New Post</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <input
              type='input'
              onChange={this.handleTitleChange} 
              value={this.state.title}
            />
          </div>
          <div>
            <label>Content: </label>
            <textarea
              onChange={this.handleContentChange}
              value={this.state.content}
            ></textarea>
          </div>
          <div>
            <label>Category: </label>
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              <option key={'null'} value=''></option>
              {Object.keys(categories).map((key) => (
                <option key={key} value={categories[key].name}>{categories[key].name}</option>
              ))}
            </select>
          </div>
          <input
            type='submit'
            value='Save Post'
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories,
  }
}

export default connect(mapStateToProps)(AddPost)
