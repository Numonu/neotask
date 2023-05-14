import { AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsShieldLock, BsGoogle } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function SignUpForm() {
	return (
		<>
			<form className="flex flex-col gap-4">
				<Input
					placeholder="user name"
					icon={<AiOutlineUser />}
					required
				/>
				<Input
					placeholder="email address"
					icon={<MdAlternateEmail />}
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
					<span>Create account with Email</span>
				</Button>
				<Button>
					<BsGoogle className="text-2xl" />
					<span>Create account with Google</span>
				</Button>
			</form>
		</>
	);
}
