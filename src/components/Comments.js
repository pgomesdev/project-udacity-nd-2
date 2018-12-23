import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

class Comments extends Component {
  render() {
    const { comments } = this.props
    return (
      <div>
        {Object.keys(comments)
          .filter(key => !comments[key].deleted)
          .map(key => (
            <li key={key}>
              <Comment
                comment={comments[key]}
              />
            </li>
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
