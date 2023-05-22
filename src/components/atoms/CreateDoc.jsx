import { dataContext } from "@/app/dashboard/providerLayout";
import { useContext } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function CreateDoc() {
	const {folderFocus , dispatch} = useContext(dataContext);
	
	const create = () => {
		dispatch({
			type : "create-document",
			data : {
				folderOrder : folderFocus
			}
		})
	}

	return (
		<>
			<button className="border-zinc-800 w-full h-full min-h-[190px] flex flex-col items-center justify-center gap-2 border-2 border-dashed cursor-pointer hover:bg-neutral-100 outline-outline outline-offset-8 transition-colors" onClick={create}>
				<IoDocumentTextOutline className="text-3xl"/>
				<h3 className="text-xl">Create New Document</h3>
			</button>
		</>
	);
}
