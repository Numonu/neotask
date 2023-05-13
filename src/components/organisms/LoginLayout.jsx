import Image from "next/image";
import MyLink from "../atoms/Link";
import Title from "../atoms/Title";
import LoginForm from "../molecules/LoginForm";

export default function LoginLayout() {
	return (
		<>
			<div className="flex flex-col gap-4 px-4">
				<Image
                    className="self-center"
					src="/svg/login_draw.svg"
					alt="ilustracion de dos personas sosteniendo notas"
					width="200"
					height="200"
				/>
				<Title>Login</Title>
				<p className="text-xl">
                    log in and access your notes from anywhere in the world, even the moon!
				</p>
				<LoginForm />
				<span className="text-center">
                    Don&apos;t have an account? <MyLink>Sign up for free</MyLink>
				</span>
			</div>
		</>
	);
}
