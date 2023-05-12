import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="DivNav">
      <div className="Bookstore-CMS">Bookstore CMS </div>
      <div className="BOOKS"><Link to="./">Book</Link></div>
      <div className="CATEGORIES">
        {' '}
        <Link to="./Author">Categories</Link>
      </div>
    </div>
  );
}

export default Nav;
