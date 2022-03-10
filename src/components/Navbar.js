import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(

  <div id='navbar'style={{height: '5rem', margin: '0 auto'}} >
    <ul>
      <Link to="/" style={{color: 'red'}}>Home - Student List</Link>
    </ul>

  </div>
  );
};

export default Navbar;

