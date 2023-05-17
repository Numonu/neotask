import { auth, googleAuth } from "@/libs/firebase.init";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

export function useLogin(method , credentials) {
	return async () => {
		const loader = toast.loading("Sending");
		try {
			switch (method) {
				case "email":
					await signInWithEmailAndPassword(
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
		} catch (error) {
			console.error(error.code, error.message);
			toast.error(error.message, { id: loader });
		}
	};
}
