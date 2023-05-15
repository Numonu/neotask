import Head from "next/head";
import DashboardHead from "@/components/organisms/DashboardHead";

export default function Dashboard() {
	return (
		<>
			<Head>
				<title>Manage your Notes</title>
			</Head>
			<div className="bg-neutral-50 text-neutral-800 h-[200vh]">
				<DashboardHead/>
			</div>
		</>
	);
}
