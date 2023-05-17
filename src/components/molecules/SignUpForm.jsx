"use client";
import { createUserWithEmailAndPassword , signInWithPopup } from "firebase/auth";
import { AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsShieldLock, BsGoogle } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { auth, googleAuth } from "@/libs/firebase.init";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignUpForm() {

	const [credentials , setCredentials] = useState({
		username : "",
		email : "",
		password : ""
	})


	const registerWithEmail = async () => {
		const loader = toast.loading("Sending");
		try {
			await createUserWithEmailAndPassword(auth , credentials.email , credentials.password);
			toast.dismiss(loader);
		} catch (error) {
			console.error(error.code , error.message);
			toast.error(error.message , {id: loader});
		}
	}

	const registerWithGoogle = async () => {
		const loader = toast.loading("Sending");
		try {
			await signInWithPopup(auth , googleAuth);
			toast.dismiss(loader);
		} catch (error) {
			console.error(error.code , error.message);
			toast.error(error.message , {id: loader});
		}
	}

	return (
		<>
			<form className="flex flex-col gap-4" onSubmit={e => {
				e.preventDefault();
				registerWithEmail();
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
				<Button onClick={registerWithGoogle} type="button">
					<BsGoogle className="text-2xl" />
					<span>Continue with Google</span>
				</Button>
			</form>
		</>
	);
}
