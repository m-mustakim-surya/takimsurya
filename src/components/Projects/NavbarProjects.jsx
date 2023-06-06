import React, { useState } from 'react';
import heroImage from '../../assets/img/takim-surya.png';
import hamMenu from '../../assets/img/ham-menu.svg'
import hamMenuClose from '../../assets/img/ham-menu-close.svg'
import { Link } from 'react-router-dom';

const NavbarProjects = () => {
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);

  const toggleSmallMenu = () => {
    setIsSmallMenuOpen(!isSmallMenuOpen);
  };
  
  return (
    <header class="header">
      <div class="header__content">
        <Link to="/" class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src={heroImage}
              alt="M. Mustakim Surya Logo"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">M. Mustakim Surya</span>
        </Link>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <Link to="/"  class="header__link"> Home </Link>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont" onClick={toggleSmallMenu}>
            <img
              src={isSmallMenuOpen ? hamMenuClose : hamMenu}
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
          </div>
        </div>
      </div>
      <div class={`header__sm-menu ${isSmallMenuOpen ? 'header__sm-menu--active' : ''}`}>
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <Link to="/" > Home </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default NavbarProjects