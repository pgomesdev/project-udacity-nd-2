import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Category from './Category'
import Posts from './Posts'
//import Post from './Post'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <h1>Readable</h1>
          </div>
          <div>
            <Category />
            <Route exact path='/' component={Posts} />
            <Route path='/:category' component={Posts} />
          </div>
        </Fragment>
      </Router>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(App)
