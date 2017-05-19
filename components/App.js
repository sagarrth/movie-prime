import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import Home from './Home';
import '../public/normalize.css'
import '../public/styles.css'

function App () {
  return (
    <BrowserRouter>
      <div className="app">
        <Match exactly pattern='/' component={Home} />
      </div>
    </BrowserRouter>
  );
}

render (<App />, document.getElementById('root'));
