import { auth, db, googleAuth } from "@/firebase/config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogin(method , credentials) {
	const router = useRouter();
	return async () => {
		const loader = toast.loading("Sending");
		let userRequest;
		try {
			switch (method) {
				case "email":
					userRequest = await signInWithEmailAndPassword(
						auth,
						credentials.email,
						credentials.password
					);
					break;
				case "google":
					userRequest = await signInWithPopup(auth, googleAuth);
					break;
                default :
                    throw new Error("[Dev]: el metodo " + method + " no esta declarado");
			}
			//antes de continuar , descargamos los datos de este usuario
			await loopTryLoadData(userRequest.user.uid);
			toast.dismiss(loader);
			router.push("/dashboard");
		} catch (error) {
			console.error(error.code, error.message);
			toast.error(error.message, { id: loader });
		}
	};
}
const loopTryLoadData = async (uid) => {
	while (true) {
		try {
			const dataRequest = await getDoc(doc(db, "users", uid));
			localStorage["neotask-local-data"] = dataRequest.data().data;
			break;
		} catch (error) {
			await new Promise((res) => setTimeout(res , 5000))
			console.error(error);
			continue;
		}
	}
}
