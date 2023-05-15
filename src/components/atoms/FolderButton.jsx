export default function FolderButton({ icon, children }) {
	return (
		<>
			<button className="bg-neutral-300 py-2 px-4 flex items-center gap-2 rounded-lg hover:bg-neutral-800 hover:text-neutral-50 hover:py-3 transition-[background-color_padding_color]">
				<div className="text-2xl">{icon}</div>
				<span className="text-xl">{children}</span>
			</button>
		</>
	);
}