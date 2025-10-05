import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import logoTechSolutions from "../assets/Logo TechSolutions.png";

export default function Navbar() {
  const location = useLocation();

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
        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/reportar"
            className={`navbar-link ${
              location.pathname === "/reportar" ? "active" : ""
            }`}
          >
            Reportar
          </Link>
          <Link
            to="/historial"
            className={`navbar-link ${
              location.pathname === "/historial" ? "active" : ""
            }`}
          >
            Historial
          </Link>
        </div>
      </div>
    </nav>
  );
}
