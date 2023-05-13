import Title from "@/components/atoms/Title";
import Head from "next/head";
import LoginForm from "@/components/organisms/LoginForm";

export default function Login() {
	return (
		<>
			<Head>
				<title>Login in Neotask</title>
			</Head>
			<div className="text-neutral-900 bg-neutral-50 min-h-screen">
				<Title>Login</Title>
				<p className="text-xl">
					Bienvenido! , inicia sesion y accede a todas tus tareas desde cualquier parte del mundo
				</p>
				<LoginForm/>
			</div>
		</>
	);
}
