import { Link, Outlet, useLocation } from "react-router-dom";
import "../../styles/admin.css";

export default function AdminLayout() {
  const location = useLocation();

  const isActive = (path) => (location.pathname.startsWith(path) ? "active" : "");

  return (
    <div className="admin">
      <header className="admin-topbar">
        <div className="brand">Sistema de Mantenimiento</div>
        <div className="role">Administrador Juan</div>
      </header>

      <aside className="admin-sidebar">
        <div className="side-title">Panel</div>
        <nav className="menu">
          <Link to="/admin" className={isActive("/admin")}>
            <span className="icon">🏠</span> Inicio
          </Link>
          <Link to="/admin/inventario" className={isActive("/admin/inventario")}>
            <span className="icon">📦</span> Gestión de inventario
          </Link>
          <Link to="/admin/usuarios" className={isActive("/admin/usuarios")}>
            <span className="icon">👥</span> Gestión de usuarios y roles
          </Link>
          <Link to="/admin/reportes" className={isActive("/admin/reportes")}>
            <span className="icon">🧾</span> Gestión de reportes
          </Link>
          <Link to="/admin/estadisticas" className={isActive("/admin/estadisticas")}>
            <span className="icon">📊</span> Estadísticas y métricas
          </Link>
          <Link to="/admin/ordenes" className={isActive("/admin/ordenes")}>
            <span className="icon">📝</span> Gestión de órdenes
          </Link>
          <Link to="/" className="">
            <span className="icon">🚪</span> Salir
          </Link>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}


