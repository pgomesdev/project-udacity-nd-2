import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

class Comments extends Component {
  render() {
    const { comments } = this.props
    return (
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
  }
}

const mapStateToProps = ({ comments }) => {
  return {
    comments,
  }
}

export default connect(mapStateToProps)(Comments)
