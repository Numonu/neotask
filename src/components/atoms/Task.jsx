import { formatRoute } from "@/utilities/format";
import { useRouter } from "next/navigation";

export default function Task({title , date}) {
	const router = useRouter();

	const navToTask = () => router.push(`/dashboard/${formatRoute(title)}`);

	return (
		<>
			<button className="pattern-points border-neutral-800 border-2 border-b-4 px-4 py-6 rounded-md text-start outline-offset-8 outline-outline hover:-translate-y-2 group transition-transform"
			onClick={navToTask}>
				<div className="border-neutral-800 w-9 aspect-square border-4 rounded-xl mb-8 group-hover:rotate-45 transition-transform"></div>
				<h2 className="font-bold text-3xl mb-2">
					{title}
				</h2>
				<h3 className="font-medium">{date}</h3>
			</button>
		</>
	);
}
