import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Category extends Component {
  render() {
    const { categories } = this.props

    return (
      <ul className='nav justify-content-end'>
        <li className='nav-link' key={'all'}>
          <Link to='/'>all</Link>
        </li>
        {Object.keys(categories).map(key => (
          <li className='nav-link' key={key}>
            <Link to={`/${categories[key].path}`}>{categories[key].name}</Link>
          </li>
        ))}
      </ul>
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
