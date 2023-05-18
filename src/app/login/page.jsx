import LoginLayout from "../../components/organisms/LoginLayout";

export const metadata = {
	title: "Login in Neotask",
	description:
		"Login and access your notes from anywhere in the world, even the moon!",
};

export default function Login() {
	return (
		<>
			<div className="min-h-screen flex flex-col justify-center">
				<LoginLayout />
			</div>
		</>
	);
}
