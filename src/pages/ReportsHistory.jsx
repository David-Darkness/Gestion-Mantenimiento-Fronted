export default function ReportsHistory() {
  const reports = [
    { id: 1, equipo: "EQ-101", fecha: "2025-09-19", estado: "Pendiente" },
    { id: 2, equipo: "EQ-102", fecha: "2025-09-18", estado: "Resuelto" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Historial de Reportes</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Equipo</th>
            <th className="p-2 border">Fecha</th>
            <th className="p-2 border">Estado</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id}>
              <td className="p-2 border">{r.id}</td>
              <td className="p-2 border">{r.equipo}</td>
              <td className="p-2 border">{r.fecha}</td>
              <td className="p-2 border">{r.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
