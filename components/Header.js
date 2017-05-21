import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { func, string } from 'prop-types';
import { setSearchTerm } from './actionCreators';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value);
  }

  render () {
    let display;
    if (this.props.showSearch) {
      display = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />;
    } else {
      display = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            Movie Prime
          </Link>
        </h1>
        {display}
      </header>
    );
  }
}

Header.propTypes = {
  handleSearchTermChange: func,
  searchTerm: string
};

function mapStateToProps (state) {
  return {
    searchTerm: state.searchTerm
  };
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
