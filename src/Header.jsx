import React from 'react'
import "./App.css";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <h3><Link to="/">Home</Link></h3>
      <nav className='menuItems'>
        <ul className='navList'>
          <Link className='navList-item' to="/project">Project</Link>
          <Link className='navList-item' to="/ContactUs">Contact Us</Link>
        </ul>
      </nav>
    </header>
  );
}