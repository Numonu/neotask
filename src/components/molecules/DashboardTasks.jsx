import Task from "../atoms/Task";

export default function DashboardTasks() {
	return (
		<>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<Task
					title={"Tengo cosas importantes este dia"}
					date={"20 de marzo , 2023"}
				/>
                <Task
					title={"Tengo cosas importantes este dia"}
					date={"20 de marzo , 2023"}
				/>
			</div>
		</>
	);
}