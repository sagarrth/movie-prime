import React from 'react';
import { connect } from 'react-redux'
import Card from './Card';
import Header from './Header';
import { arrayOf, shape, string } from 'prop-types';

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {
            this.props.movies
            .filter((movie) => `${movie.title} ${movie.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((movie) => {
              return (
                <Card key={movie.imdbID} {...movie} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  movies: arrayOf(shape({
    title: string,
    description: string
  }))
};

function mapStateToProps (state) {
  return {
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(Search)
