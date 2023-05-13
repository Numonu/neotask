import Input from "../atoms/Input";
import { AiOutlineUser } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import Button from "../atoms/Button";

export default function LoginForm() {
	return (
		<>
			<div>
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
                <Button></Button>
			</div>
		</>
	);
}
