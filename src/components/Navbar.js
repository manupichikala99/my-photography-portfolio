import React from 'react';
import logoPic from '../images/556FF32A-1C3D-4407-A55A-6AE22A288246_1_105_c.jpeg';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <img src={logoPic} alt="peakthrumylens" className="navbar-logo-pic" />
        <span>PTL</span>
      </a>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#gallery">Portfolio</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

