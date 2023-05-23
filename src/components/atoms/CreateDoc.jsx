import { dataContext } from "@/app/dashboard/providerLayout";
import { getDate } from "@/utilities/getDate";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import TaskModal from "../molecules/TaskModal";
import Modal from "./Modal";

export default function CreateDoc() {
	const [openTask , setOpenTask] = useState(false);
	const {folderFocus , dispatch , data} = useContext(dataContext);
	
	const create = () => {
		dispatch({
			type : "create-document",
			data : {
				folderOrder : folderFocus,
				date : getDate()
			}
		})
		setOpenTask(true);
	}

	return (
		<>
			<button className="border-zinc-800 w-full h-full min-h-[190px] flex flex-col items-center justify-center gap-2 border-2 border-dashed cursor-pointer hover:bg-neutral-100 outline-outline outline-offset-8 transition-colors" onClick={create}>
				<IoDocumentTextOutline className="text-3xl"/>
				<h3 className="text-xl">Create New Document</h3>
			</button>
			{openTask &&
				createPortal(
					<Modal callback={() => setOpenTask(false)}>
						<TaskModal
							data={data[folderFocus]}
							order={data[folderFocus].documents.length - 1}
							hanldeClose={() => setOpenTask(false)}
						/>
					</Modal>,
					document.getElementById("modal")
				)}
		</>
	);
}
