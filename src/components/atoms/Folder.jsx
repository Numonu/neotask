export default function FolderButton({ icon, children }) {
	return (
		<>
			<button className="bg-neutral-200 py-2 px-4 flex items-center gap-2 rounded-lg hover:bg-neutral-800 hover:text-neutral-50 hover:py-3 transition-[background-color_padding_color] focus:bg-neutral-800  focus:py-3 outline-amber-500 group">
				<div className="text-2xl group-focus:text-amber-500">{icon}</div>
				<span className="text-xl group-focus:text-amber-500">{children}</span>
			</button>
		</>
	);
}
