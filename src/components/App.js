import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LoadingBar } from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Category from './Category'
import Posts from './Posts'
import AddPost from './AddPost'
import PostDetail from './PostDetail'
import NotFound from './NotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {
            this.props.loading ||
            <div className='container-fluid'>
              <div className='jumbotron jumbotron-fluid'>
                <div className='text-center'>
                  <h1 className='display-4'>Readable</h1>
                </div>
              </div>
              <div>
                <Category />
                <Route exact path='/' component={Posts} />
                <Route exact path='/404' component={NotFound} />
                <Route exact path='/newpost' component={AddPost} />
                <Route exact path='/:category' component={Posts} />
                <Route exact path='/:category/:post_id' component={PostDetail} />
                <Route path='/post/:post_id/edit' component={AddPost} />
              </div>
            </div>
          }
          
        </Fragment>
      </Router>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
