import { IoDocumentTextOutline } from "react-icons/io5";

export default function CreateDoc() {
	return (
		<>
			<button className="border-zinc-800 w-full h-full flex flex-col items-center justify-center gap-2 border-2 border-dashed cursor-pointer hover:bg-neutral-100 transition-colors outline-amber-500 outline-offset-8">
				<IoDocumentTextOutline className="text-3xl"/>
				<h3 className="text-xl">Create New Document</h3>
			</button>
		</>
	);
}
