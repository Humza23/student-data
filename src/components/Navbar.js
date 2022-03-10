import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(

  <div id='navbar'>
    <ul>
      <Link to="/" style={{color: 'black'}}>Home - Student List</Link>
    </ul>
    <ul>
        <button onClick={()=>window.print()}> Print Me!</button>
    </ul>

  </div>
  );
};

export default Navbar;

