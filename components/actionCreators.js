import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions';
import axios from 'axios';

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOMDBData (imdbID, OMDBData) {
	return { type: ADD_OMDB_DATA, imdbID, OMDBData };
}

export function getOMDBDetails (imdbID) {
	return function (dispatch) {
		axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=8a93d27f`)
	    .then(response => {
	    	dispatch(addOMDBData(imdbID, response.data));
	    })
	    .catch(err => console.error('axios error', err));
	}
}
