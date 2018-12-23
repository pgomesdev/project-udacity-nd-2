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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Content: </label>
            <textarea
              onChange={this.handleContentChange}
              value={this.state.content}
            ></textarea>
          </div>
          <input
            type='submit'
            value='Save Comment'
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ edit }) => {
  return {
    edit,
  }
}

export default connect(mapStateToProps)(AddComment)
