import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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

    if (!content) {
      alert('The content must de filled')

      return
    }

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

      dispatch(clearEdit())
    }
    
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
    const { edit } = this.props
    return(
      <Fragment>
        <h5>{edit.id ? 'Edit Comment' : 'New Comment'}</h5>
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
      </Fragment>
    )
  }
}

AddComment.propTypes = {
  dispatch: PropTypes.func.isRequired,
  edit: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
}

const mapStateToProps = ({ edit, authedUser }, { postId }) => {
  return {
    edit,
    authedUser,
    postId,
  }
}

export default connect(mapStateToProps)(AddComment)
