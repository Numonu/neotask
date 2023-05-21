export default function CircleButton({ children , onClick }) {
	return (
		<>
			<button className="w-min aspect-square group relative p-2 cursor-pointer rounded-full outline-outline outline-offset-8"
			onClick={onClick}>
				<div className="bg-neutral-200 absolute inset-0 rounded-full scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform"></div>
				<div className="relative">{children}</div>
			</button>
		</>
	);
}
