import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import user from '../images/user.png'

function Nav() {
  return (
    <div className="divnav">
      <div className="DivNav">
        <div className="Bookstore-CMS">Bookstore CMS </div>
        <div className="BOOKS"><Link to="./" className="book-link">Book</Link></div>
        <div className="CATEGORIES">
          {' '}
          <Link to="./Author" className="book-link">Categories</Link>
        </div>
        <button class="iconbutton" type="button"><span class="material-icons primary-color"> <img src={user} width="70%" height="70%" alt="" /></span></button>
  
       
      </div>
  
    </div>

  );
}

export default Nav;
