import React, { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar-main-container'>
      <div className="navbar-list-container">
        <div className="name-logo-box">
          <NavLink to='/'>Ajith S</NavLink>
        </div>

        <div className={`nav-list-box ${menuOpen ? 'open' : ''}`}>
          <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to='/skills' className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink>
          <NavLink to='/education' className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink>
          <NavLink to='/experience' className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </div>

        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
