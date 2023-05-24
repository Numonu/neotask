import DashboardHead from "@/components/organisms/DashboardHead";
import AuthLayout from "./authLayout";
import ProviderLayout from "./providerLayout";

export default function Layout({ children }) {
	return (
		<>
			<DashboardHead />
			<AuthLayout>
				<ProviderLayout>{children}</ProviderLayout>
			</AuthLayout>
		</>
	);
}
