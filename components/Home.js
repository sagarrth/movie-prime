import React from 'react';
import { Link } from 'react-router';

function Home () {
  return (
    <div className='home'>
      <h1>Movie Prime</h1>
      <input type='text' placeholder='Search' />
      <Link to='/search'>Browse All</Link>
    </div>
  )
}

export default Home
