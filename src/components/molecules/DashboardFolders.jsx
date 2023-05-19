import { useContext } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import CreateFolder from "../atoms/CreateFolder";
import Folder from "../atoms/Folder";
import { dataContext } from "../organisms/DashboardWorkspace";
import FolderTemplate from "./FolderTemplate";

export default function DashboardFolders() {
	const { data } = useContext(dataContext);
	return (
		<>
			<div className="flex flex-col gap-1">
				{data.map((e, i) => (
					<Folder
						key={e.folderName}
						order={i}
						icon={<AiOutlineFolderOpen />}
					>
						{e.folderName}
					</Folder>
				))}
				<FolderTemplate/>
				<CreateFolder />
			</div>
		</>
	);
}
