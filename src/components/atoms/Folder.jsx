import { useContext } from "react";
import { dataContext } from "../organisms/DashboardWorkspace";

export default function FolderButton({ icon, children, order }) {
	const {setFolderFocus} = useContext(dataContext);
	return (
		<>
			<button
				className="bg-neutral-200 py-2 px-4 flex items-center gap-2 rounded-lg hover:bg-neutral-800 hover:text-neutral-50 hover:py-3 transition-[background-color_padding_color] focus:bg-neutral-800  focus:py-3 outline-outline group"
				onClick={() => setFolderFocus(order)}
			>
				<div className="text-2xl group-focus:text-amber-500">
					{icon}
				</div>
				<span className="text-xl capitalize group-focus:text-amber-500">
					{children}
				</span>
			</button>
		</>
	);
}
