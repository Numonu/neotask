import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import CircleButton from "../atoms/CircleButton";

export default function TaskModal({ title, hanldeClose, content = "" }) {
	const [myContent, setMyContent] = useState(content);
	return (
		<>
			<div className="bg-neutral-50 h-[90vh] w-[90%] max-w-[600px] p-4 rounded-md grid grid-rows-[min-content_1fr] gap-4">
				<div className="flex justify-between items-center">
					<h3 className="text-xl text-center font-medium">{title}</h3>
					<CircleButton onClick={hanldeClose}>
						<HiOutlineXMark className="text-2xl" />
					</CircleButton>
				</div>
				<textarea
					placeholder="Content Here"
					value={myContent}
					className="bg-neutral-100 text-lg p-2 rounded-md"
					onChange={(e) => {
						setMyContent(e.target.value);
					}}
				/>
			</div>
		</>
	);
}
