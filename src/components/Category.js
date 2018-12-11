import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Category extends Component {
  render() {
    const { categories } = this.props

    return (
      <div>
        <ul>
          {Object.keys(categories).map(key => (
            <li key={key}>{categories[key].name}</li>
          ))}
        </ul>
      </div>
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
