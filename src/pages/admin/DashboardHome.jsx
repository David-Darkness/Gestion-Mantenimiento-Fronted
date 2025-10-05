export default function DashboardHome() {
  return (
    <div>
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
    </div>
  );
}


