import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(

  <div id='navbar'>
    <p className='logoImg'> <Link to="/"> <img src="../logo.png" alt="logo"/> </Link> </p>
  </div>
  );
};

export default Navbar;

