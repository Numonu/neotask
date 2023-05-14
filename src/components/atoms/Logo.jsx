import { BsFillTriangleFill } from "react-icons/bs";

export default function Logo() {
	return (
		<>
			<div className="relative w-min mx-auto rounded-full text-6xl">
				<BsFillTriangleFill />
				<BsFillTriangleFill className="text-zinc-700 absolute bottom-2 left-4"/>
			</div>
		</>
	);
}
