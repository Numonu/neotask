import Title from "@/components/atoms/Title";
import Head from "next/head";
import LoginForm from "@/components/molecules/LoginForm";
import MyLink from "@/components/atoms/Link";

export default function Login() {
	return (
		<>
			<Head>
				<title>Login in Neotask</title>
			</Head>
			<div className="text-neutral-900 bg-neutral-50">
				<div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center gap-4">
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
			</div>
		</>
	);
}
