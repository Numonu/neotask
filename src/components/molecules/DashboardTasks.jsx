import { useContext } from "react";
import Task from "../atoms/Task";
import { dataContext } from "../organisms/DashboardWorkspace";

export default function DashboardTasks() {
	const {data , folderFocus} = useContext(dataContext);
	return (
		<>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				{
					data[folderFocus].documents.map(e => {
						return <Task key={e.title} title={e.title} date={"20 marzo , 2023"}/>
					})
				}
			</div>
		</>
	);
}
