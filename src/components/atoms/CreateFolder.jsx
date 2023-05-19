import { BsFillPlusCircleFill } from "react-icons/bs";
import SoulHover from "./SoulHover";

export default function CreateFolder() {
	return (
		<>
			<button className="text-5xl self-center mt-4 outline-amber-500 outline-offset-8 rounded-full">
				<SoulHover>
					<BsFillPlusCircleFill />
				</SoulHover>
			</button>
		</>
	);
}
