"use client";
import { MdAlternateEmail } from "react-icons/md";
import { BsShieldLock, BsGoogle } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";

export default function LoginForm() {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const emailLogin = useLogin("email", credentials);
	const googleLogin = useLogin("google");

	return (
		<>
			<form
				className="flex flex-col gap-4"
				onSubmit={(e) => {
					e.preventDefault();
					emailLogin();
				}}
			>
				<Input
					onChange={(e) => setCredentials({ ...credentials, email: e })}
					placeholder="email address"
					icon={<MdAlternateEmail />}
					type="email"
					required
				/>
				<Input
					onChange={(e) => setCredentials({ ...credentials, password: e })}
					placeholder="password"
					icon={<BsShieldLock />}
					type="password"
					required
				/>
				<Button className="mt-8">
					<MdOutlineMail className="text-3xl" />
					<span>Sign In with Email</span>
				</Button>
				<Button onClick={googleLogin} type="button">
					<BsGoogle className="text-2xl" />
					<span>Sign In with Google</span>
				</Button>
			</form>
		</>
	);
}
