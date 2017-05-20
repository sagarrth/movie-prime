import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { string, func } from 'prop-types'
import { setSearchTerm } from './actionCreators'

class Home extends React.Component {
	constructor (props) {
		super (props);
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}

	handleSearchTermChange (event) {
		this.props.dispatchSetSearchTerm (event.target.value);
	}

	render () {
		return (
	    <div className='home'>
	      <h1>Movie Prime</h1>
	      <input type='text' placeholder='Search' 
	      	value={this.props.searchTerm} onChange={this.handleSearchTermChange}/>
	      <Link to='/search'>Browse All</Link>
	    </div>
	  )	
	}
  
}

Home.propTypes = {
	searchTerm: string,
	dispatchSetSearchTerm: func
}

function mapStateToProps (state) {
	return {
		searchTerm: state.searchTerm
	};
}

function mapDispatchToProps (dispatch) {
	return {
		dispatchSetSearchTerm (searchTerm) {
			dispatch(setSearchTerm(searchTerm))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
