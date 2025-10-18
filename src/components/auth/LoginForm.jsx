import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

const EmployeeIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <circle cx="32" cy="22" r="12" fill="currentColor" opacity="0.18" />
    <circle cx="32" cy="22" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
    <path
      d="M18 50c2.5-7.5 8.8-12 14-12s11.5 4.5 14 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 56c4-10 12-16 20-16s16 6 20 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
  </svg>
);

const TechnicianIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <rect x="12" y="26" width="40" height="24" rx="6" fill="currentColor" opacity="0.12" />
    <rect x="12" y="26" width="40" height="24" rx="6" fill="none" stroke="currentColor" strokeWidth="4" />
    <rect x="22" y="14" width="20" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M16 38h32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M24 38v8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M40 38v8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const AdminIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <path
      d="M32 8l18 6v14c0 13-8.6 24.6-18 28-9.4-3.4-18-15-18-28V14z"
      fill="currentColor"
      opacity="0.12"
    />
    <path
      d="M32 8l18 6v14c0 13-8.6 24.6-18 28-9.4-3.4-18-15-18-28V14z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 32l7 7 9-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ROLE_ICONS = {
  empleado: EmployeeIcon,
  tecnico: TechnicianIcon,
  admin: AdminIcon
};

export default function LoginForm({ role, redirectPath, roleName }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simular proceso de login (aqui ira la integracion con Spring Security)
    setTimeout(() => {
      setIsLoading(false);
      // Por ahora, simular login exitoso y redirigir
      navigate(redirectPath);
    }, 1500);
  };

  const RoleGraphic = ROLE_ICONS[role] ?? EmployeeIcon;

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="role-icon" aria-hidden="true">
            <RoleGraphic />
          </div>
          <h1 className="login-title">Iniciar sesion</h1>
          <p className="login-subtitle">{roleName}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
              placeholder="Ingrese su usuario"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Contrasena
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Ingrese su contrasena"
              required
            />
          </div>

          <button
            type="submit"
            className={`login-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Iniciando sesion...
              </>
            ) : (
              "Iniciar sesion"
            )}
          </button>
        </form>

        <div className="login-footer">
          <button onClick={() => navigate("/")} className="back-button">
            Regresar al inicio
          </button>
        </div>
      </div>
    </div>
  );
}
