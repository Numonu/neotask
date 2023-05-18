import DashboardHero from "@/components/molecules/DashboardHero";
import DashboardWorkspace from "@/components/organisms/DashboardWorkspace";

export const metadata = {
    title : "Manage your Notes",
    description : "Create , update adn delete notes"
}

export default function Dashboard() {
	return (
		<>
			<div className="h-[200vh]">
                <DashboardHero/>
				<DashboardWorkspace/>
			</div>
		</>
	);
}
