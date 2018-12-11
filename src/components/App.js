import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleInitialData } from '../actions/shared'
import Category from './Category'
import Posts from './Posts'
//import Post from './Post'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <div>
          <h1>My Posts</h1>
        </div>
        <div>
          <Category />
        </div>
        <div>
          <Posts />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(App)
