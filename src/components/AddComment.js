import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleCreateComment, handleEditComment } from '../actions/comments'

class AddComment extends Component {
  state = {
    content: '',
  }

  handleContentChange = (e) => {
    const content = e.target.value

    this.setState(() => ({
      content
    }))
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { dispatch, postId, edit } = this.props
    const { content } = this.state

    if (!edit.id) {
      await dispatch(handleCreateComment(
        postId,
        content,
      ))
    } else {
      await dispatch(handleEditComment(
        edit.id,
        content,
      ))
    }

    this.setState(() => ({
      content: '',
    }))
  }

  componentWillReceiveProps(props) {
    const { edit } = props

    this.setState(() => ({
      content: edit ? edit.body : ''
    }))
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Content: </label>
          <textarea
            className='form-control'
            onChange={this.handleContentChange}
            value={this.state.content}
          ></textarea>
        </div>
        <input
          className='btn btn-dark'
          type='submit'
          value='Save Comment'
        />
      </form>
    )
  }
}

const mapStateToProps = ({ edit }) => {
  return {
    edit,
  }
}

export default connect(mapStateToProps)(AddComment)
