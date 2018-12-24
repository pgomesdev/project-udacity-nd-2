import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Category from './Category'
import Posts from './Posts'
import AddPost from './AddPost'
import PostDetail from './PostDetail'

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
            <Route exact path='/newpost' component={AddPost} />
            <Route exact path='/:category' component={Posts} />
            <Route exact path='/:category/:post_id' component={PostDetail} />
            <Route path='/post/:post_id/edit' component={AddPost} />
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
