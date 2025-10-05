import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

export default function LoginForm({ role, redirectPath, roleName }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular proceso de login (aquí irá la integración con Spring Security)
    setTimeout(() => {
      setIsLoading(false);
      // Por ahora, simular login exitoso y redirigir
      navigate(redirectPath);
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="role-icon">
            {role === "empleado" && "👤"}
            {role === "tecnico" && "🛠️"}
            {role === "admin" && "👔"}
          </div>
          <h1 className="login-title">Iniciar Sesión</h1>
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
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Iniciando sesión...
              </>
            ) : (
              "Iniciar Sesión"
            )}
          </button>
        </form>

        <div className="login-footer">
          <button 
            onClick={() => navigate("/")}
            className="back-button"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}
