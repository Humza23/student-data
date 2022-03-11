import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(

  <div id='navbar'>
    <a href="/" className='logoImg'><img src="../logo.png" alt="logo"/></a>
    {/* <p> <Link to="/">Home</Link> </p> */}
  </div>
  );
};

export default Navbar;

