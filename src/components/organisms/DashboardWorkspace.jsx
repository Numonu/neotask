import DashboardFolders from "@/components/molecules/DashboardFolders";
import Search from "../atoms/Search";
import DashboardTasks from "../molecules/DashboardTasks";
export default function DashboardWorkspace() {
	return (
		<>
			<div className="max-w-[1200px] mx-auto px-4">
				<Search />
				<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[1fr_3fr]">
					<DashboardFolders />
					<DashboardTasks />
				</div>
			</div>
		</>
	);
}
