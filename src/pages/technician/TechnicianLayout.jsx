import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/technician.css";
import logoTechSolutions from "../../assets/Logo TechSolutions.png";
import { WrenchIcon, HistoryIcon, FilesIcon, LayersIcon, ExitIcon } from "../../components/icons/NavIcons";

export default function TechnicianLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path) => (location.pathname.startsWith(path) ? "active" : "");

  const toggleSidebar = () => setIsSidebarOpen((state) => !state);
  const closeSidebar = () => setIsSidebarOpen(false);

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
    <div className={`tech admin ${!isMobile && isCollapsed ? "collapsed" : ""}`}>
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
          <div className="brand">Modulo de Mantenimiento: Trabajador</div>
        </div>
        <div className="role">Tecnico Juan</div>
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
          <Link to="/tecnico" className={isActive("/tecnico")} onClick={closeSidebar}>
            <span className="icon">
              <WrenchIcon />
            </span>
            <span className="label">Revisar reportes asignados</span>
          </Link>
          <Link to="/tecnico/historial" className={isActive("/tecnico/historial")} onClick={closeSidebar}>
            <span className="icon">
              <HistoryIcon />
            </span>
            <span className="label">Historial de intervenciones</span>
          </Link>
          <Link to="/tecnico/fichas" className={isActive("/tecnico/fichas")} onClick={closeSidebar}>
            <span className="icon">
              <FilesIcon />
            </span>
            <span className="label">Fichas tecnicas de equipos</span>
          </Link>
          <Link to="/tecnico/hojadevida" className={isActive("/tecnico/hojadevida")} onClick={closeSidebar}>
            <span className="icon">
              <LayersIcon />
            </span>
            <span className="label">Hoja de vida de equipos</span>
          </Link>
          <Link to="/" onClick={closeSidebar}>
            <span className="icon">
              <ExitIcon />
            </span>
            <span className="label">Salir al modulo principal</span>
          </Link>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
