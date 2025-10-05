import LoginForm from "../../../components/auth/LoginForm";

export default function LoginAdmin() {
  return (
    <LoginForm 
      role="admin"
      redirectPath="/admin"
      roleName="Administrador"
    />
  );
}
