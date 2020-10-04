import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
          TLRLN
          </Link>
          <div className='menu-icon'>
            <i className='fas fa-bars' />
          </div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <a href="https://www.linkedin.com/in/tyler-lian/"
                className='nav-links'
              >
                LinkedIn
              </a>
            </li>
            <li className='nav-item'>
              <a href="https://github.com/tylerlian/react-resume-website/tree/gh-pages"
                className='nav-links'
              >
                GitHub Repo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;