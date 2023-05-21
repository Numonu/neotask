export default function Task({ title, date }) {
	return (
		<>
			<button className="bg-neutral-50 w-full h-full pattern-points border-neutral-800 border-2 border-b-4 px-4 py-6 rounded-md text-start outline-offset-8 outline-outline hover:-translate-y-[0.2rem] hover:shadow-lg group transition-[transform_shadow]">
				<div className="border-neutral-800 w-9 aspect-square border-4 rounded-xl mb-8 group-hover:rotate-45 transition-transform"></div>
				<h2 className="font-bold text-3xl mb-2">{title}</h2>
				<h3 className="font-medium">{date}</h3>
			</button>
		</>
	);
}
