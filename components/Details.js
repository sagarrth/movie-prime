import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { shape, string, func } from 'prop-types';
import { getOMDBDetails } from './actionCreators';

class Details extends React.Component {
  componentDidMount () {
    if (!this.props.OMDBData.imdbRating) {
      this.props.dispatch(getOMDBDetails(this.props.movie.imdbID));
    }   
  }  

  render () {
    const { title, description, year, poster, trailer } = this.props.movie
    let rating
    if (this.props.OMDBData.imdbRating) {
      rating = <h3>{this.props.OMDBData.imdbRating}</h3>
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
		description: string,
    imdbID: string
	}),
  dispatch: func,
  OMDBData: shape({
    imdbRating: string
  })
};

function mapStateToProps (state, ownProps) {
  let OMDBData = state.OMDBData[ownProps.movie.imdbID] ? state.OMDBData[ownProps.movie.imdbID] : {};
  return {
    OMDBData
  };
}

export default connect(mapStateToProps)(Details)