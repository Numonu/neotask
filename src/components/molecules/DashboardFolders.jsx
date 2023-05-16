import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Folder from "../atoms/Folder";
import SoulHover from "../atoms/SoulHover";

export default function DashboardFolders() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<Folder icon={<AiOutlineFolderOpen />}>All</Folder>
				<Folder icon={<AiOutlineFolderOpen />}>General</Folder>
				<Folder icon={<AiOutlineFolderOpen />}>Favorites</Folder>
				<button className="text-5xl self-center mt-4 outline-amber-500 outline-offset-8 rounded-full">
					<SoulHover>
						<BsFillPlusCircleFill />
					</SoulHover>
				</button>
			</div>
		</>
	);
}
