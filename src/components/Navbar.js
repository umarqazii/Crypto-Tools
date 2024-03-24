import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Bull-and-bear.png'; 
import '../Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* adding image to the brand */}
        <img src={logo} alt="logo" width="100" height="110" className="d-inline-block align-text-top" style={{ marginRight: '5px' }}/>
        <Link className="navbar-brand" to="/patienthome" style={{ fontFamily: 'Audiowide, sans-serif' }}>Bulls and Bears</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} style={{ transition: 'max-height 0.3s ease-in-out' }}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontFamily: 'Audiowide, sans-serif' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/liveprices" style={{ fontFamily: 'Audiowide, sans-serif' }}>Live Prices</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontFamily: 'Audiowide, sans-serif' }}>Tools</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontFamily: 'Audiowide, sans-serif', color: 'red' }}>Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;