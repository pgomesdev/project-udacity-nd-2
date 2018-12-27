import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleCreateComment, handleEditComment } from '../actions/comments'
import { clearEdit } from '../actions/edit'

class AddComment extends Component {
  state = {
    content: '',
  }

  handleContentChange = (e) => {
    const content = e.target.value

    this.setState(() => ({
      content,
    }))
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { dispatch, postId, edit, authedUser } = this.props
    const { content } = this.state

    if (!edit.id) {
      dispatch(handleCreateComment(
        postId,
        content,
        authedUser,
      ))
    } else {
      dispatch(handleEditComment(
        edit.id,
        content,
      ))
    }

    dispatch(clearEdit())

    this.setState(() => ({
      content: '',
    }))
  }

  componentWillReceiveProps(nextProps) {
    const { edit } = nextProps

    this.setState(() => ({
      content: edit.body || ''
    }))
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(clearEdit())
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

const mapStateToProps = ({ edit, authedUser }) => {
  return {
    edit,
    authedUser,
  }
}

export default connect(mapStateToProps)(AddComment)
