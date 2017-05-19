import React from 'react'
import { Link } from 'react-router'
import { string } from 'prop-types'

class Card extends React.Component {
  render () {
    const { poster, title, year, description, imdbID } = this.props
    return (
      <div className='card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  imdbID: string.isRequired
}

export default Card
