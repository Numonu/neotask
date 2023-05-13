import { AiOutlineUser } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function LoginForm() {
	return (
		<>
			<form>
				<Input
					placeholder="email address"
					icon={<AiOutlineUser />}
					required
				/>
				<Input
					placeholder="password"
					icon={<BsShieldLock />}
					required
				/>
				<Button>
					Sign In
				</Button>
			</form>
		</>
	);
}
