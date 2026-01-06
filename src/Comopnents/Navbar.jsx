import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../logo/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✅ Close menu after clicking any link (mobile fix)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/pricing" className="navbar-link" onClick={closeMenu}>
              Pricing
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <Link to="/enquiry" className="enquiry-btn" onClick={closeMenu}>
            Enquiry
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

