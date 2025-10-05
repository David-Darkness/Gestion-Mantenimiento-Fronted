import LoginForm from "../../../components/auth/LoginForm";

export default function LoginEmpleado() {
  return (
    <LoginForm 
      role="empleado"
      redirectPath="/reportar"
      roleName="Empleado"
    />
  );
}
