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

  // no theme switching

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" onClick={closeMenu} className="navbar-logo" style={{ display: "flex", alignItems: "center" }}>
          <img src={logoTechSolutions} alt="TechSolutions" style={{ height: 50 }} />
        </Link>
        
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
            to="/login/empleado"
            className={`navbar-link ${location.pathname.startsWith("/login/empleado") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Empleado
          </Link>
          <Link
            to="/login/tecnico"
            className={`navbar-link ${location.pathname.startsWith("/login/tecnico") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Técnico
          </Link>
          <Link
            to="/login/admin"
            className={`navbar-link ${location.pathname.startsWith("/login/admin") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Administrador
          </Link>
          {/* theme toggle removed */}
        </div>
      </div>
    </nav>
  );
}
