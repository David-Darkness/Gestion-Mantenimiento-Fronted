import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logoTechSolutions from "../assets/Logo TechSolutions.png";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logoTechSolutions}
            alt="TechSolutions"
            style={{ height: 50 }}
          />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Navigation links */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`navbar-link ${
              location.pathname === "/" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link
            to="/reportar"
            className={`navbar-link ${
              location.pathname === "/reportar" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Reportar
          </Link>
          <Link
            to="/historial"
            className={`navbar-link ${
              location.pathname === "/historial" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Historial
          </Link>
        </div>
      </div>
    </nav>
  );
}
