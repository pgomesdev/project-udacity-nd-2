import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Category extends Component {
  render() {
    const { categories } = this.props

    return (
      <Fragment>
        <div>
          <ul>
            <li key={'all'}>
              <Link to='/'>all</Link>
            </li>
            {Object.keys(categories).map(key => (
              <li key={key}>
                <Link to={`/${categories[key].path}`}>{categories[key].name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link to='/newpost'>New Post</Link>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories,
  }
}

Category.propTypes = {
  categories: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Category)
