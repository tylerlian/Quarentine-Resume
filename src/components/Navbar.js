import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/react-resume-website' className='navbar-logo' onClick={closeMobileMenu}>
          TLRLN
          </Link>
          <div className='menu-icon' onClick ={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/react-resume-website' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <a href="https://www.linkedin.com/in/tyler-lian/"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                LinkedIn
              </a>
            </li>
            <li className='nav-item'>
              <a href="https://github.com/tylerlian/react-resume-website/tree/gh-pages"
                className='nav-links'
                onClick={closeMobileMenu}
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