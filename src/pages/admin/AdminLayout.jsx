import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/admin.css";
import logoTechSolutions from "../../assets/Logo TechSolutions.png";
import {
  DashboardIcon,
  InventoryIcon,
  UsersIcon,
  ReportsIcon,
  AnalyticsIcon,
  OrdersIcon,
  ExitIcon
} from "../../components/icons/NavIcons";

export default function AdminLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path) => (location.pathname.startsWith(path) ? "active" : "");

  const toggleSidebar = () => {
    setIsSidebarOpen((state) => !state);
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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`admin ${!isMobile && isCollapsed ? "collapsed" : ""}`}>
      <header className="admin-topbar">
        <div className="topbar-left">
          {isMobile ? (
            <button
              className="sidebar-toggle"
              onClick={toggleSidebar}
              aria-label="Mostrar/ocultar panel"
              aria-expanded={isSidebarOpen}
            >
              <span className={`hamburger ${isSidebarOpen ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          ) : (
            <button
              className="collapse-toggle"
              onClick={() => setIsCollapsed((state) => !state)}
              aria-label="Colapsar/expandir panel"
              aria-expanded={!isCollapsed}
              title={isCollapsed ? "Expandir panel" : "Colapsar panel"}
            >
              {isCollapsed ? ">>" : "<<"}
            </button>
          )}
          <div className="brand">Sistema de Mantenimiento</div>
        </div>
        <div className="role">Administrador Juan</div>
      </header>

      {isMobile && isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <aside className={`admin-sidebar ${isSidebarOpen ? "active" : ""}`}>
        {isMobile && (
          <button className="sidebar-close" aria-label="Cerrar panel" onClick={closeSidebar}>
            X
          </button>
        )}
        <div className="sidebar-logo">
          <img src={logoTechSolutions} alt="TechSolutions" />
        </div>
        <div className="side-title">Panel</div>
        <nav className="menu">
          <Link to="/admin" className={isActive("/admin")} onClick={closeSidebar}>
            <span className="icon">
              <DashboardIcon />
            </span>
            <span className="label">Inicio</span>
          </Link>
          <Link to="/admin/inventario" className={isActive("/admin/inventario")} onClick={closeSidebar}>
            <span className="icon">
              <InventoryIcon />
            </span>
            <span className="label">Gestion de inventario</span>
          </Link>
          <Link to="/admin/usuarios" className={isActive("/admin/usuarios")} onClick={closeSidebar}>
            <span className="icon">
              <UsersIcon />
            </span>
            <span className="label">Gestion de usuarios y roles</span>
          </Link>
          <Link to="/admin/reportes" className={isActive("/admin/reportes")} onClick={closeSidebar}>
            <span className="icon">
              <ReportsIcon />
            </span>
            <span className="label">Gestion de reportes</span>
          </Link>
          <Link to="/admin/estadisticas" className={isActive("/admin/estadisticas")} onClick={closeSidebar}>
            <span className="icon">
              <AnalyticsIcon />
            </span>
            <span className="label">Estadisticas y metricas</span>
          </Link>
          <Link to="/admin/ordenes" className={isActive("/admin/ordenes")} onClick={closeSidebar}>
            <span className="icon">
              <OrdersIcon />
            </span>
            <span className="label">Gestion de ordenes</span>
          </Link>
          <Link to="/" onClick={closeSidebar}>
            <span className="icon">
              <ExitIcon />
            </span>
            <span className="label">Salir</span>
          </Link>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
