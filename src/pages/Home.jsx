import { Link } from "react-router-dom";
import "../styles/home.css";

const EmployeeIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <circle cx="32" cy="22" r="12" fill="currentColor" opacity="0.18" />
    <circle cx="32" cy="22" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
    <path
      d="M18 50c2.5-7.5 8.8-12 14-12s11.5 4.5 14 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 56c4-10 12-16 20-16s16 6 20 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
  </svg>
);

const TechnicianIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <rect x="12" y="26" width="40" height="24" rx="6" fill="currentColor" opacity="0.12" />
    <rect x="12" y="26" width="40" height="24" rx="6" fill="none" stroke="currentColor" strokeWidth="4" />
    <rect x="22" y="14" width="20" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M16 38h32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M24 38v8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M40 38v8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const AdminIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <path
      d="M32 8l18 6v14c0 13-8.6 24.6-18 28-9.4-3.4-18-15-18-28V14z"
      fill="currentColor"
      opacity="0.12"
    />
    <path
      d="M32 8l18 6v14c0 13-8.6 24.6-18 28-9.4-3.4-18-15-18-28V14z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 32l7 7 9-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <header className="home-header">
          <h1 className="home-title">Modulo De Mantenimiento Correctivo</h1>
          <p className="home-subtitle">Bienvenido</p>
          <p className="home-helper">Por favor seleccione su rol:</p>
        </header>

        <div className="roles">
          <Link to="/login/empleado" className="role-link" aria-label="Empleado">
            <div className="role-card">
              <div className="role-icon">
                <EmployeeIcon />
              </div>
              <div className="role-name">Empleado</div>
              <div className="role-desc">Reportar fallas y consultar su estado</div>
            </div>
          </Link>

          <Link to="/login/tecnico" className="role-link" aria-label="Tecnico">
            <div className="role-card">
              <div className="role-icon">
                <TechnicianIcon />
              </div>
              <div className="role-name">Tecnico</div>
              <div className="role-desc">Gestionar y atender solicitudes</div>
            </div>
          </Link>

          <Link to="/login/admin" className="role-link" aria-label="Administrador">
            <div className="role-card">
              <div className="role-icon">
                <AdminIcon />
              </div>
              <div className="role-name">Administrador</div>
              <div className="role-desc">Panel y configuracion del sistema</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
