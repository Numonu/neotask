import { AiOutlineFolderOpen } from "react-icons/ai";
import FolderButton from "../atoms/FolderButton";

export default function DashboardFolders() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<FolderButton icon={<AiOutlineFolderOpen />}>
                    All
                </FolderButton>
				<FolderButton icon={<AiOutlineFolderOpen />}>
					General
				</FolderButton>
				<FolderButton icon={<AiOutlineFolderOpen />}>
					Favorites
				</FolderButton>
			</div>
		</>
	);
}
