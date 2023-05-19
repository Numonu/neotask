import { useContext } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Folder from "../atoms/Folder";
import SoulHover from "../atoms/SoulHover";
import { dataContext } from "../organisms/DashboardWorkspace";

export default function DashboardFolders() {
	const { data } = useContext(dataContext);
	return (
		<>
			<div className="flex flex-col gap-1">
				{data.map((e) => (
					<Folder key={e.folderName} icon={<AiOutlineFolderOpen />}>
						{e.folderName}
					</Folder>
				))}
				<button className="text-5xl self-center mt-4 outline-amber-500 outline-offset-8 rounded-full">
					<SoulHover>
						<BsFillPlusCircleFill />
					</SoulHover>
				</button>
			</div>
		</>
	);
}
