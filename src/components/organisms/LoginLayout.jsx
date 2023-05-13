import MyLink from "../atoms/Link";
import Title from "../atoms/Title";
import LoginForm from "../molecules/LoginForm";

export default function LoginLayout() {
	return (
		<>
			<div>
				<Title>Login</Title>
				<p className="text-xl">
					Bienvenido! , inicia sesion y accede a todas tus tareas
					desde cualquier parte del mundo
				</p>
				<LoginForm />
				<span className="text-center">
					No tienes una cuenta?<MyLink>Crear aqui!</MyLink>
				</span>
			</div>
		</>
	);
}
