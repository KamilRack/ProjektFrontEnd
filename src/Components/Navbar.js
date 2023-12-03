// src/Components/navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Graphic/Logo.png';  

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/"> Strona główna</Link></li>
        <li><Link to="/projects">Projekty</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
