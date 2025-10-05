import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/admin.css";

export default function AdminLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const isActive = (path) => (location.pathname.startsWith(path) ? "active" : "");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="admin">
      <header className="admin-topbar">
        <div className="topbar-left">
          {isMobile && (
            <button 
              className="sidebar-toggle"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <span className={`hamburger ${isSidebarOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          )}
          <div className="brand">Sistema de Mantenimiento</div>
        </div>
        <div className="role">Administrador Juan</div>
      </header>

      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <aside className={`admin-sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="side-title">Panel</div>
        <nav className="menu">
          <Link to="/admin" className={isActive("/admin")} onClick={closeSidebar}>
            <span className="icon">🏠</span> Inicio
          </Link>
          <Link to="/admin/inventario" className={isActive("/admin/inventario")} onClick={closeSidebar}>
            <span className="icon">📦</span> Gestión de inventario
          </Link>
          <Link to="/admin/usuarios" className={isActive("/admin/usuarios")} onClick={closeSidebar}>
            <span className="icon">👥</span> Gestión de usuarios y roles
          </Link>
          <Link to="/admin/reportes" className={isActive("/admin/reportes")} onClick={closeSidebar}>
            <span className="icon">🧾</span> Gestión de reportes
          </Link>
          <Link to="/admin/estadisticas" className={isActive("/admin/estadisticas")} onClick={closeSidebar}>
            <span className="icon">📊</span> Estadísticas y métricas
          </Link>
          <Link to="/admin/ordenes" className={isActive("/admin/ordenes")} onClick={closeSidebar}>
            <span className="icon">📝</span> Gestión de órdenes
          </Link>
          <Link to="/" className="" onClick={closeSidebar}>
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


