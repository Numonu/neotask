import { useRouter } from "next/navigation";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function CreateDoc() {
	const router = useRouter();
	const navToNew = () => router.push("dashboard/New-Document");

	return (
		<>
			<button className="border-zinc-800 w-full h-full min-h-[190px] flex flex-col items-center justify-center gap-2 border-2 border-dashed cursor-pointer hover:bg-neutral-100 outline-outline outline-offset-8 transition-colors" onClick={navToNew}>
				<IoDocumentTextOutline className="text-3xl"/>
				<h3 className="text-xl">Create New Document</h3>
			</button>
		</>
	);
}
