import { Link, useLocation } from "react-router-dom";
import "../styles/admin.css";

export default function AdminDashboard() {
  const location = useLocation();

  return (
    <div className="admin">
      <header className="admin-topbar">
        <div className="brand">Sistema de Mantenimiento</div>
        <div className="role">Administrador Juan</div>
      </header>

      <aside className="admin-sidebar">
        <div className="side-title">Panel</div>
        <nav className="menu">
          <Link to="/admin/inventario" className={`${location.pathname.includes("/admin/inventario") ? "active" : ""}`}>
            <span className="icon">📦</span> Gestión de inventario
          </Link>
          <Link to="/admin/usuarios" className={`${location.pathname.includes("/admin/usuarios") ? "active" : ""}`}>
            <span className="icon">👥</span> Gestión de usuarios y roles
          </Link>
          <Link to="/admin/reportes" className={`${location.pathname.includes("/admin/reportes") ? "active" : ""}`}>
            <span className="icon">🧾</span> Gestión de reportes
          </Link>
          <Link to="/admin/estadisticas" className={`${location.pathname.includes("/admin/estadisticas") ? "active" : ""}`}>
            <span className="icon">📊</span> Estadísticas y métricas
          </Link>
          <Link to="/admin/ordenes" className={`${location.pathname.includes("/admin/ordenes") ? "active" : ""}`}>
            <span className="icon">📝</span> Gestión de órdenes
          </Link>
          <Link to="/" className="">
            <span className="icon">🚪</span> Salir
          </Link>
        </nav>
      </aside>

      <main className="admin-content">
        <h1 className="welcome">Bienvenido, Administrador Juan</h1>
        <h2 className="section-title">Gestión de Inventario</h2>

        <section className="card">
          <table className="table">
            <thead>
              <tr>
                <th className="muted">IU DE INV</th>
                <th className="muted">CATEGORÍA</th>
                <th className="muted">NUM. EXISTENCIAS</th>
                <th className="muted">MIN STOK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PB3324</td>
                <td>Hardware</td>
                <td>74</td>
                <td>5</td>
              </tr>
              <tr>
                <td>PC6291</td>
                <td>PC</td>
                <td>56</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}


