import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-component-conatiner container-fluid'>
      Navbar
      <nav>
        <ul className="list-unstyled d-flex justify-content-center justify-content-between">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/create_recipe'>Create A Recipe!</Link></li>
          <li><Link to='/explore'>Explore</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
