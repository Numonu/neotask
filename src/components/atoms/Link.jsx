import Link from "next/link";

export default function MyLink({ children , href = "#" }) {
	return (
		<>
			<Link
				className="text-red-500 underline-offset-2 hover:underline focus:outline-amber-500"
				href={href}
			>
				{children}
			</Link>
		</>
	);
}
