import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

const DEFAULT_STATE = {
	searchTerm: '',
	OMDBData: {}
}

const setSearchTerm = (state, action) => {
	const newState = {};
	Object.assign(newState, state, {searchTerm: action.searchTerm});
	return newState;
}

const addOMDBData = (state, action) => {
	const newOMDBData = {};
	Object.assign(newOMDBData, state.OMDBData, {[action.imdbID]: action.OMDBData});
	const newState = {};
	Object.assign(newState, state, {OMDBData: newOMDBData});
	return newState;	
}

const rootReducer = (state=DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		case ADD_OMDB_DATA:
			return addOMDBData(state, action);
		default:
			return state;
	}
}

export default rootReducer;
