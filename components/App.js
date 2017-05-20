import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import Home from './Home';
import Search from './Search';
import Details from './Details';
import movieList from '../public/data.json';
import '../public/normalize.css'
import '../public/styles.css'

function App () {
  return (
    <BrowserRouter>
      <div className="app">
        <Match exactly pattern='/' component={Home} />
        <Match pattern='/search' component={() => <Search movies={movieList.movies} />} />
        <Match pattern='/details/:id' component={
        	(props) => {
        		const movies = movieList.movies.filter(movie => props.params.id === movie.imdbID);
        		return <Details movie={movies[0]} {...props} />
        	}
        }/>
      </div>
    </BrowserRouter>
  );
}

render (<App />, document.getElementById('root'));
