import { AiOutlineFolder  , AiOutlineFolderOpen} from "react-icons/ai";
import { dataContext } from "@/app/dashboard/providerLayout";
import { useContext } from "react";

export default function FolderButton({children, order }) {
	const {setFolderFocus , folderFocus} = useContext(dataContext);
	return (
		<>
			<button
				className="bg-neutral-200 hover:text-zinc-50 focus:text-zinc-50 hover:bg-neutral-800 focus:bg-neutral-800 outline-outline py-2 px-4 flex items-center gap-2 rounded-lg   hover:py-3 focus:py-3  transition-[background-color_padding_color]     "
				onClick={() => setFolderFocus(order)}
			>
				<div className="text-2xl">
					{order == folderFocus ? <AiOutlineFolderOpen/> : <AiOutlineFolder/>}
				</div>
				<span className="text-xl capitalize whitespace-nowrap text-ellipsis overflow-hidden">
					{children}
				</span>
			</button>
		</>
	);
}
