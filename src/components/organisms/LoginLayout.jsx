import MyLink from "../atoms/Link";
import Title from "../atoms/Title";
import LoginForm from "../molecules/LoginForm";

export default function LoginLayout() {
	return (
		<>
			<div className="flex flex-col gap-4 px-4">
				<Title>Login</Title>
				<p className="text-xl">
                    Login and access your notes from anywhere in the world, even the moon!
				</p>
				<LoginForm />
				<span className="text-center">
                    Don&apos;t have an account? <MyLink href="/signup">Sign up for free</MyLink>
				</span>
			</div>
		</>
	);
}
