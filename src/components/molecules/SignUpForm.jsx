"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsShieldLock, BsGoogle } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { auth } from "@/libs/firebase.init";
import { useState } from "react";

export default function SignUpForm() {

	const [credentials , setCredentials] = useState({
		username : "",
		email : "",
		password : ""
	})


	const registerWithEmail = async () => {
		try {
			await createUserWithEmailAndPassword(auth , credentials.email , credentials.password);
		} catch (error) {
			console.error(error.code , error.message);
		}
	}

	return (
		<>
			<form className="flex flex-col gap-4">
				<Input
					placeholder="user name"
					icon={<AiOutlineUser />}
					required
				/>
				<Input
					placeholder="email address"
					icon={<MdAlternateEmail />}
					type="email"
					required
				/>
				<Input
					placeholder="password"
					icon={<BsShieldLock />}
					type="password"
					required
				/>
				<Button className="mt-8">
					<MdOutlineMail className="text-3xl" />
					<span>Continue with Email</span>
				</Button>
				<Button>
					<BsGoogle className="text-2xl" />
					<span>Continue with Google</span>
				</Button>
			</form>
		</>
	);
}
