import SignUpLayout from "../../components/organisms/SignUpLayout";


export const metadata = {
	title: 'Sign up in Neotask',
	description: 'Create an account and discover the wonderful benefits of a task manager, fast, easy and beautiful',
}

export default function Signup() {
	return (
		<>
			<div className="text-neutral-800 bg-neutral-50">
				<div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center">
					<SignUpLayout />
				</div>
			</div>
		</>
	);
}
