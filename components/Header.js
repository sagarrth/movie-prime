import React from 'react';
import { Link } from 'react-router';
import { func, string } from 'prop-types';

class Header extends React.Component {
  render () {
    let display;
    if (this.props.showSearch) {
      display = <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />;
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

export default Header;
