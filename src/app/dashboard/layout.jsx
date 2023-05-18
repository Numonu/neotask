import DashboardHead from "@/components/organisms/DashboardHead";

export default function Layout({ children }) {
	return (
		<>
			<DashboardHead />
			{children}
		</>
	);
}
