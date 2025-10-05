export default function Inventory() {
  return (
    <div>
      <h2 className="section-title">Inventario</h2>
      <section className="card">
        <table className="table">
          <thead>
            <tr>
              <th>IU</th>
              <th>Categoría</th>
              <th>Existencias</th>
              <th>Mínimo</th>
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


