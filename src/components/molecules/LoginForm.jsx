import { AiOutlineUser } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
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
					Sign In
				</Button>
			</form>
		</>
	);
}
