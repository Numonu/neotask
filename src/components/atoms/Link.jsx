import Link from "next/link";
import CreateFolder from "./CreateFolder";

export default function MyLink({ children , href = "#" }) {
	return (
		<>
			<Link
				className="text-red-500 underline-offset-2 hover:underline focus:outline-outline"
				href={href}
			>
				{children}
			</Link>
			<CreateFolder/>
		</>
	);
}
