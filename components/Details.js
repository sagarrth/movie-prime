import React from 'react'
import Header from './Header'
import { shape, string } from 'prop-types'

class Details extends React.Component {
  render () {
    const { title, description, year, poster, trailer } = this.props.movie
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

Details.propTypes = {
	show: shape({
		title: string,
		year: string,
		poster: string,
		trailer: string,
		description: string
	})
}

export default Details