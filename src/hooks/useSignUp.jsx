import { auth, db, googleAuth } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useSignUp(method, credentials) {
	const router = useRouter();
	return async () => {
		const loader = toast.loading("Sending");
		//Peticion de usuario local
		let userRequest;
		//Registramos el usuario usando sus credenciales
		try {
			switch (method) {
				case "email":
					userRequest = await createUserWithEmailAndPassword(
						auth,
						credentials.email,
						credentials.password
					);
					break;
				case "google":
					userRequest = await signInWithPopup(auth, googleAuth);
					break;
				default:
					throw new Error(
						"[Dev]: el metodo " + method + " no esta declarado"
					);
			}
			//finalmente redirigimos a la ruta dashboard
			toast.dismiss(loader);
			router.push("/dashboard");
			//Creamos un hueco en la base de datos para este usuario (5 Intentos max)
			loopTryCreateUser(userRequest.user.uid , credentials.username);
		} catch (error) {
			console.error(error.code, error.message);
			toast.error(error.message, { id: loader });
		}
	};
}

const loopTryCreateUser = async (uid , username) => {
	let intentos = 1;
	while (intentos < 5) {
		intentos++;
		try {
			await setDoc(doc(db, "users", uid), {
				username : username,
				data : "",
			});
			break;
		} catch (error) {
			await new Promise((res) => setTimeout(res , 5000))
			console.error(error);
			continue;
		}
	}
};
