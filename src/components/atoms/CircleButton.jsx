export default function CircleButton({children}) {
	return (
		<>
			<button className="group relative p-2 cursor-pointer">
				<div className="bg-neutral-300 absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
				<div className="relative">
                    {children}
                </div>
			</button>
		</>
	);
}
