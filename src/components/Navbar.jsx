import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Mantenimiento</h1>
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
