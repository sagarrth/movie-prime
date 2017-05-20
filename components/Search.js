import React from 'react';
import Card from './Card';
import Header from './Header';
import { arrayOf, shape, string } from 'prop-types';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  }

  render () {
    return (
      <div className='search'>
        <Header showSearch searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} />
        <div>
          {
            this.props.movies
            .filter((movie) => `${movie.title} ${movie.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
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
  shows: arrayOf(shape({
    title: string,
    description: string
  }))
};

export default Search
