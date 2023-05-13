import Link from "next/link";

export default function MyLink({ children , href = "#" }) {
	return (
		<>
			<Link
				href={href}
				className="text-red-500 underline-offset-2 hover:underline"
			>
				{children}
			</Link>
		</>
	);
}
