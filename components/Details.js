import React from 'react';
import Header from './Header';
import { shape, string } from 'prop-types';
import axios from 'axios';

class Details extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      omdbData: {}
    }
  }

  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.movie.imdbID}&apikey=8a93d27f&`)
    .then(response => {
      this.setState({
        omdbData: response.data
      })
    })
    .catch(err => console.error('axios error', err));
  }  

  render () {
    const { title, description, year, poster, trailer } = this.props.movie
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3>{this.state.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading image' />
    }
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
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
	movie: shape({
		title: string,
		year: string,
		poster: string,
		trailer: string,
		description: string
	})
};

export default Details