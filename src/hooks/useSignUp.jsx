import { auth, googleAuth } from "@/libs/firebase.init";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useSignUp(method , credentials) {
	const router = useRouter();
	return async () => {
		const loader = toast.loading("Sending");
		try {
			switch (method) {
				case "email":
					await createUserWithEmailAndPassword(
						auth,
						credentials.email,
						credentials.password
					);
					break;
				case "google":
					await signInWithPopup(auth, googleAuth);
					break;
                default :
                    throw new Error("[Dev]: el metodo " + method + " no esta declarado");
			}
			toast.dismiss(loader);
			router.push("/");
		} catch (error) {
			console.error(error.code, error.message);
			toast.error(error.message, { id: loader });
		}
	};
}
