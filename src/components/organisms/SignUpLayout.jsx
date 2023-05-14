import MyLink from "../atoms/Link";
import Title from "../atoms/Title";
import SignUpForm from "../molecules/SignUpForm";

export default function SignUpLayout() {
	return (
		<>
			<div className="flex flex-col gap-4 px-4">
				<Title>Sign Up</Title>
				<p className="text-xl">
					Create an account and discover the wonderful benefits of a
					task manager, fast, easy and beautiful
				</p>
				<SignUpForm />
				<span className="text-center">
					Already have an account? <MyLink>Sign In</MyLink>
				</span>
			</div>
		</>
	);
}
