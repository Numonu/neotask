import { AiOutlineFolderOpen } from "react-icons/ai";
import Folder from "../atoms/Folder";

export default function DashboardFolders() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<Folder icon={<AiOutlineFolderOpen />}>
                    All
                </Folder>
				<Folder icon={<AiOutlineFolderOpen />}>
					General
				</Folder>
				<Folder icon={<AiOutlineFolderOpen />}>
					Favorites
				</Folder>
			</div>
		</>
	);
}
