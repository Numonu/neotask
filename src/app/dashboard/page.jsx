import Head from "next/head";
import DashboardHead from "@/components/organisms/DashboardHead";
import DashboardHero from "@/components/molecules/DashboardHero";
import DashboardWorkspace from "@/components/organisms/DashboardWorkspace";

export const metadata = {
    title : "Manage your Notes",
    description : "Create , update adn delete notes"
}

export default function Dashboard() {
	return (
		<>
			<Head>
				<title>Manage your Notes</title>
			</Head>
			<div className="bg-neutral-50 text-neutral-800 h-[200vh]">
				<DashboardHead/>
                <DashboardHero/>
				<DashboardWorkspace/>
			</div>
		</>
	);
}
