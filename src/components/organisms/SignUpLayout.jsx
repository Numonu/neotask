import MyLink from "../atoms/Link";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import SignUpForm from "../molecules/SignUpForm";

export default function SignUpLayout() {
	return (
		<>
			<div className="max-w-xl mx-auto flex flex-col gap-4 px-4">
				<Title>Sign Up</Title>
				<Paragraph>
					Create an account and discover the wonderful benefits of a
					task manager, fast, easy and beautiful
				</Paragraph>
				<SignUpForm />
				<span className="text-center">
					Already have an account?{" "}
					<MyLink href="/login">Sign In</MyLink>
				</span>
			</div>
		</>
	);
}
