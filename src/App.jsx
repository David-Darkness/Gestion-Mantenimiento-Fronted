import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReportFailure from "./pages/ReportFailure";
import AdminLayout from "./pages/admin/AdminLayout";
import DashboardHome from "./pages/admin/DashboardHome";
import Inventory from "./pages/admin/Inventory";
import Users from "./pages/admin/Users";
import Reports from "./pages/admin/Reports";
import Stats from "./pages/admin/Stats";
import Orders from "./pages/admin/Orders";
import LoginEmpleado from "./pages/auth/login/LoginEmpleado";
import LoginTecnico from "./pages/auth/login/LoginTecnico";
import LoginAdmin from "./pages/auth/login/LoginAdmin";
import TechnicianLayout from "./pages/technician/TechnicianLayout";
import AssignedReports from "./pages/technician/AssignedReports";
import InterventionHistory from "./pages/technician/InterventionHistory";
import EquipmentSheets from "./pages/technician/EquipmentSheets";
import EquipmentLife from "./pages/technician/EquipmentLife";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/empleado" element={<LoginEmpleado />} />
        <Route path="/login/tecnico" element={<LoginTecnico />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/reportar" element={<ReportFailure />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="inventario" element={<Inventory />} />
          <Route path="usuarios" element={<Users />} />
          <Route path="reportes" element={<Reports />} />
          <Route path="estadisticas" element={<Stats />} />
          <Route path="ordenes" element={<Orders />} />
        </Route>
        <Route path="/tecnico" element={<TechnicianLayout />}>
          <Route index element={<AssignedReports />} />
          <Route path="historial" element={<InterventionHistory />} />
          <Route path="fichas" element={<EquipmentSheets />} />
          <Route path="hojadevida" element={<EquipmentLife />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
