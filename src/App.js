import React from 'react';
import './App.css';
import data from './data.js';
import Products from './products';
import Companies from './companies';
import Users from './users';

console.log(data);
function App( ) {
  return(
    <div id = 'container'>
      <Products />
      <Companies />
      <Users />
    </div>
  )
}

export default App;
