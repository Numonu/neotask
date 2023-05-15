import MyLink from "../atoms/Link";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import LoginForm from "../molecules/LoginForm";

export default function LoginLayout() {
	return (
		<>
			<div className="max-w-xl mx-auto flex flex-col gap-4 px-4">
				<Title>Login</Title>
				<Paragraph>
					Login and access your notes from anywhere in the world, even
					the moon!
				</Paragraph>
				<LoginForm />
				<span className="text-center">
					Don&apos;t have an account?{" "}
					<MyLink href="/signup">Sign up for free</MyLink>
				</span>
			</div>
		</>
	);
}
