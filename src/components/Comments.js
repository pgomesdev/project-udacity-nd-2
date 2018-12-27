import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Comment from './Comment'

const Comments = ({ comments }) => (
  <div className='col-md-12'>
    {Object.keys(comments)
      .filter(key => !comments[key].deleted)
      .map(key => (
        <Comment
          key={key}
          comment={comments[key]}
        />
      )
    )}
  </div>
)

Comments.propTypes = {
  comments: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
}

const mapStateToProps = ({ comments }) => {
  return {
    comments,
  }
}

export default connect(mapStateToProps)(Comments)
