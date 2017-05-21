import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';
import Search from './Search';
import Details from './Details';
import movieList from '../public/data.json';
import '../public/normalize.css'
import '../public/styles.css'

function App () {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Route exactly path='/' component={Home} />
          <Route path='/search' component={() => <Search movies={movieList.movies} />} />
          <Route path='/details/:id' component={
          	(props) => {
          		const movies = movieList.movies.filter(movie => props.match.params.id === movie.imdbID);
          		return <Details movie={movies[0]} {...props} />
          	}
          }/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

render (<App />, document.getElementById('root'));
