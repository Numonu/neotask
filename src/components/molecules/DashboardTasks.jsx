"use client";
import { dataContext } from "@/app/dashboard/providerLayout";
import { useContext } from "react";
import CreateDoc from "../atoms/CreateDoc";
import Task from "../atoms/Task";

export default function DashboardTasks() {
	const {data , folderFocus} = useContext(dataContext);
	return (
		<>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<CreateDoc/>
				{
					data[folderFocus].documents.map((e,i) => {
						return <Task order={i} key={e.title} title={e.title} date={e.date}/>
					})
				}
			</div>
		</>
	);
}
