import DashboardFolders from "@/components/molecules/DashboardFolders";
import Search from "../atoms/Search";
import DashboardTasks from "../molecules/DashboardTasks";

export default function DashboardWorkspace() {
	return (
		<>
			<div className="max-w-[1200px] mx-auto px-4">
				<Search />
				<div className="mt-4 flex flex-col gap-4 md:flex-row">
					<div className="md:w-1/4">
						<DashboardFolders />
					</div>
					<div className="md:w-3/4">
						<DashboardTasks />
					</div>
				</div>
			</div>
		</>
	);
}
