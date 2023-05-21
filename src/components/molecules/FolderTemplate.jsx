import { dataContext } from "@/app/dashboard/providerLayout";
import { useContext, useState } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";

export default function FolderTemplate({ callback }) {
	const [folderName, setFolderName] = useState("");
	const { dispatch } = useContext(dataContext);

	const create = () => {
		callback();
		//
		if (folderName == "") return void 0;
		dispatch({
			type: "create-folder",
			data: {
				folderName,
			},
		});
	};

	return (
		<>
			<div
				className="bg-neutral-800 text-neutral-50  py-3 px-4 flex items-center gap-2 rounded-lg hover:py-3 transition-[background-color_padding_color] outline-outline group"
				onKeyDown={e => e.key == "Enter" && create()}
			>
				<div className="text-2xl">
					<AiOutlineFolderOpen />
				</div>
				<input
					className="bg-neutral-700 text-xl capitalize grow"
					type="text"
					autoFocus="true"
					onBlur={create}
					onChange={(e) => setFolderName(e.target.value)}
				/>
			</div>
		</>
	);
}
