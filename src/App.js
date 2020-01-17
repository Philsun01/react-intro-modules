import React from 'react';
import './App.css';
import data from './data.js';
import Products from './products';
import Companies from './companies';
import Users from './users';
import Stats from './stats';

console.log(data);
function App( ) {
  return(
    <div id = 'container'>
      <Products />
      <Companies />
      <Users />
      <Stats />
    </div>
  )
}

export default App;
