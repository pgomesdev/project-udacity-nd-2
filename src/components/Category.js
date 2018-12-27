import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Category = ({ categories }) => (
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

Category.propTypes = {
  categories: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
}

const mapStateToProps = ({ categories }) => {
  return {
    categories,
  }
}

export default connect(mapStateToProps)(Category)
