import useScrollView from "@/hooks/useScrollView";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
export default function DashboardHead() {
	const {scrollOver} = useScrollView(1);
	return (
		<>
			<header
				className={`${
					scrollOver && "bg-white shadow-sm"
				} sticky top-0  transition-[colors_shadow]`}
			>
				<nav className="max-w-[1200px] mx-auto py-2 px-4 flex justify-between items-center text-3xl">
					<HiBars3BottomLeft />
					<h1 className="text-2xl">Neotask</h1>
					<IoMdNotificationsOutline />
				</nav>
			</header>
		</>
	);
}
