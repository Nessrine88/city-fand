import React from 'react';
import '../styles/nav.css';


const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container flex items-center">
        <div className="nav-logo">
        <img
            src="/images/logo.png"
            alt="Logo"
          
          />
        </div>
        <i class="fas fa-bars text-2xl cursor-pointer " onclick="toggleMenu()"></i>
        <ul className="hidden md:flex nav-links justify-center w-full mx-auto p-5 items-center ">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#properties">Properties</a></li>
          <li><a href="#FAQ’s">FAQ’s</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
