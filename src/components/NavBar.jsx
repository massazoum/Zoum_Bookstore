import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

function Nav() {
  return (
    <div className="divnav commun-divnav">
      <div className="DivNav commun-divnav">
        <div className="Bookstore-CMS commun-style">Bookstore CMS </div>
        <div className="BOOKS commun-nav"><Link to="./" className="book-link">Book</Link></div>
        <div className="CATEGORIES commun-nav">
          {' '}
          <Link to="./Author" className="book-link commun-style">Categories</Link>
        </div>
      </div>
      <div className="iconbutton" type="button">
        {' '}
        <img src={user} className="icoImg" width="70%" height="70%" alt="" />
      </div>
    </div>

  );
}

export default Nav;
