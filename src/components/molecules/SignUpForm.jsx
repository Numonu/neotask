"use client";
import { createUserWithEmailAndPassword , signInWithPopup } from "firebase/auth";
import { AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsShieldLock, BsGoogle } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";

export default function SignUpForm() {

	const [credentials , setCredentials] = useState({
		username : "",
		email : "",
		password : ""
	})

	const emailSignUp = useSignUp("email" , credentials);
	const googleSignUp = useSignUp("google");

	return (
		<>
			<form className="flex flex-col gap-4" onSubmit={e => {
				e.preventDefault();
				emailSignUp();
			}}>
				<Input
					onChange={(e) => setCredentials({...credentials , username : e})}
					placeholder="user name"
					icon={<AiOutlineUser />}
					required
				/>
				<Input
					onChange={(e) => setCredentials({...credentials , email : e})}
					placeholder="email address"
					icon={<MdAlternateEmail />}
					type="email"
					required
				/>
				<Input
					onChange={(e) => setCredentials({...credentials , password : e})}
					placeholder="password"
					icon={<BsShieldLock />}
					type="password"
					required
				/>
				<Button className="mt-8">
					<MdOutlineMail className="text-3xl" />
					<span>Continue with Email</span>
				</Button>
				<Button onClick={googleSignUp} type="button">
					<BsGoogle className="text-2xl" />
					<span>Continue with Google</span>
				</Button>
			</form>
		</>
	);
}
