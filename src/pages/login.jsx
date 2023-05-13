import Input from "@/components/atoms/Input";
import Title from "@/components/atoms/Title";
import { AiOutlineUser , AiOutlineMail } from "react-icons/ai";
import Head from "next/head";

export default function Login() {
	return (
		<>
			<Head>
				<title>Login in Neotask</title>
			</Head>
			<div className="text-neutral-900 bg-neutral-50 min-h-screen">
				<Title>Login</Title>
				<Input
					placeholder="Email Address"
					icon={<AiOutlineUser />}
					required
				/>
                <Input
					placeholder="Password"
                    type="password"
					icon={<AiOutlineMail />}
					required
				/>
			</div>
		</>
	);
}
