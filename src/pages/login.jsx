import Head from "next/head";
import LoginLayout from "@/components/organisms/LoginLayout";

export default function Login() {
	return (
		<>
			<Head>
				<title>Login in Neotask</title>
			</Head>
			<div className="text-neutral-900 bg-neutral-50">
				<div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center gap-4">
					<LoginLayout/>
				</div>
			</div>
		</>
	);
}
