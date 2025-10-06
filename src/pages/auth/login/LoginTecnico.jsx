import LoginForm from "../../../components/auth/LoginForm";

export default function LoginTecnico() {
  return (
    <LoginForm 
      role="tecnico"
      redirectPath="/tecnico"
      roleName="Técnico"
    />
  );
}
