import { useContext, useState } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { dataContext } from "../organisms/DashboardWorkspace";

export default function FolderTemplate({ callback }) {
	const [folderName, setFolderName] = useState("");
	const { dispatch } = useContext(dataContext);

	const create = (e) => {
		if (e == "Enter" || !e) {
			callback();
			dispatch({
				type: "create-folder",
				data: {
					folderName,
				},
			});
		}
	};

	return (
		<>
			<div
				className="bg-neutral-800 text-neutral-50  py-3 px-4 flex items-center gap-2 rounded-lg hover:py-3 transition-[background-color_padding_color] outline-outline group"
				onKeyDown={(e) => create(e.key)}
			>
				<div className="text-2xl">
					<AiOutlineFolderOpen />
				</div>
				<inputg
					className="bg-neutral-700 text-xl capitalize grow"
					type="text"
					autoFocus="true"
					onBlur={() => create("Enter")}
					onChange={(e) => setFolderName(e.target.value)}
				/>
			</div>
		</>
	);
}
