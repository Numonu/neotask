"use client";
import { dataContext } from "@/app/dashboard/providerLayout";
import { useContext, useState } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import CreateFolder from "../atoms/CreateFolder";
import Folder from "../atoms/Folder";
import FolderTemplate from "./FolderTemplate";

export default function DashboardFolders() {
	const { data } = useContext(dataContext);
	const [viewTemplate , setViewTemplate] = useState(false);
	
	const on = () => setViewTemplate(true);
	const off = () => setViewTemplate(false);

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
				{ viewTemplate ? <FolderTemplate callback={off}/> : <CreateFolder callback={on}/>}
			</div>
		</>
	);
}
