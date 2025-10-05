import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <header className="home-header">
          <h1 className="home-title">Módulo De Mantenimiento Correctivo</h1>
          <p className="home-subtitle">Bienvenido</p>
          <p className="home-helper">Por favor seleccione su rol:</p>
        </header>

        <div className="roles">
          <Link to="/login/empleado" className="role-link" aria-label="Emplead@">
            <div className="role-card">
              <div className="role-icon">👤</div>
              <div className="role-name">Emplead@</div>
              <div className="role-desc">Reportar fallas y consultar su estado</div>
            </div>
          </Link>

          <Link to="/login/tecnico" className="role-link" aria-label="Técnico">
            <div className="role-card">
              <div className="role-icon">🛠️</div>
              <div className="role-name">Técnico</div>
              <div className="role-desc">Gestionar y atender solicitudes</div>
            </div>
          </Link>

          <Link to="/login/admin" className="role-link" aria-label="Administrador">
            <div className="role-card">
              <div className="role-icon">👔</div>
              <div className="role-name">Administrador</div>
              <div className="role-desc">Panel y configuración del sistema</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
