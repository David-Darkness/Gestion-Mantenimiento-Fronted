import { useState } from "react";

export default function ReportFailure() {
  const [equipmentId, setEquipmentId] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ equipmentId, description });
    // Aquí luego llamas al backend con fetch/axios
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Reportar Falla</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="ID del equipo"
          value={equipmentId}
          onChange={(e) => setEquipmentId(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Descripción de la falla"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Enviar Reporte
        </button>
      </form>
    </div>
  );
}
