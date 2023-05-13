import { AiOutlineUser , AiOutlineMail} from "react-icons/ai";
import { BsShieldLock, BsGoogle } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function LoginForm() {
	return (
		<>
			<form className="flex flex-col gap-4">
				<Input
					placeholder="email address"
					icon={<AiOutlineUser />}
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
					<span>Sign In with Email</span>
				</Button>
				<Button>
					<BsGoogle className="text-2xl" />
					<span>Sign In with Google</span>
				</Button>
			</form>
		</>
	);
}
