import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/admin.css";

export default function AdminLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isCollapsed, setIsCollapsed] = useState(false); // desktop collapse

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
    <div className={`admin ${!isMobile && isCollapsed ? 'collapsed' : ''}`}>
      <header className="admin-topbar">
        <div className="topbar-left">
          {isMobile ? (
            <button 
              className="sidebar-toggle"
              onClick={toggleSidebar}
              aria-label="Mostrar/ocultar panel"
              aria-expanded={isSidebarOpen}
            >
              <span className={`hamburger ${isSidebarOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          ) : (
            <button
              className="collapse-toggle"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label="Colapsar/expandir panel"
              aria-expanded={!isCollapsed}
              title={isCollapsed ? 'Expandir panel' : 'Colapsar panel'}
            >
              {isCollapsed ? '»' : '«'}
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
        {/* Close button visible only on mobile */}
        {isMobile && (
          <button
            className="sidebar-close"
            aria-label="Cerrar panel"
            onClick={closeSidebar}
          >
            ×
          </button>
        )}
        <div className="side-title">Panel</div>
        <nav className="menu">
          <Link to="/admin" className={isActive("/admin")} onClick={closeSidebar}>
            <span className="icon">🏠</span><span className="label">Inicio</span>
          </Link>
          <Link to="/admin/inventario" className={isActive("/admin/inventario")} onClick={closeSidebar}>
            <span className="icon">📦</span><span className="label">Gestión de inventario</span>
          </Link>
          <Link to="/admin/usuarios" className={isActive("/admin/usuarios")} onClick={closeSidebar}>
            <span className="icon">👥</span><span className="label">Gestión de usuarios y roles</span>
          </Link>
          <Link to="/admin/reportes" className={isActive("/admin/reportes")} onClick={closeSidebar}>
            <span className="icon">🧾</span><span className="label">Gestión de reportes</span>
          </Link>
          <Link to="/admin/estadisticas" className={isActive("/admin/estadisticas")} onClick={closeSidebar}>
            <span className="icon">📊</span><span className="label">Estadísticas y métricas</span>
          </Link>
          <Link to="/admin/ordenes" className={isActive("/admin/ordenes")} onClick={closeSidebar}>
            <span className="icon">📝</span><span className="label">Gestión de órdenes</span>
          </Link>
          <Link to="/" className="" onClick={closeSidebar}>
            <span className="icon">🚪</span><span className="label">Salir</span>
          </Link>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}


