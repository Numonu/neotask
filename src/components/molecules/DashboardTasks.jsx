"use client";
import { dataContext } from "@/app/dashboard/providerLayout";
import { useContext } from "react";
import CreateDoc from "../atoms/CreateDoc";
import Task from "../atoms/Task";
import VirtualPopup from "../atoms/VirtualPopup";

export default function DashboardTasks() {
	const { data, folderFocus } = useContext(dataContext);
	return (
		<>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<CreateDoc />
				{data[folderFocus].documents.map((e, i) => {
					return (
						<VirtualPopup
							key={e.title}
							closeContent={
								<Task title={e.title} date={e.date} />
							}
							openContent={
								<Task title={e.title} date={e.date} />
							}
							openSize={{
								width : "90vw",
								height : "90vh",
								maxWidth : "600px",
								maxheight : "700px",
							}}
						/>
					);
				})}
			</div>
		</>
	);
}
