import DashboardHead from "@/components/organisms/DashboardHead";
import ProviderLayout from "./providerLayout";

export default function Layout({ children }) {
	return (
		<>
			<DashboardHead />
			<ProviderLayout>{children}</ProviderLayout>
		</>
	);
}
