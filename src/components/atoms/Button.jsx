export default function Button({
	className,
	children = "text here",
	type = "submit",
}) {
	return (
		<>
			<button
				className={`${className} bg-neutral-800 text-neutral-50 border-black w-full py-2 flex justify-center items-center gap-2 text-xl font-medium rounded-md border-b-4 outline-offset-4 focus:outline-amber-500 hover:bg-amber-500 hover:border-amber-700 transition-colors`}
				type={type}
			>
				{children}
			</button>
		</>
	);
}
