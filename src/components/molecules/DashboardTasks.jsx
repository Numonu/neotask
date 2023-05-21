"use client";
import CreateDoc from "../atoms/CreateDoc";
import Task from "../atoms/Task";
import { dataContext } from "@/app/dashboard/providerLayout";
import { useContext} from "react";

export default function DashboardTasks() {
	const { data, folderFocus } = useContext(dataContext);
	return (
		<>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<CreateDoc />
				{data[folderFocus].documents.map((e) => {
					return <Task content={e.content} key={e.title} title={e.title} date={e.date}/>;
				})}
			</div>
		</>
	);
}
