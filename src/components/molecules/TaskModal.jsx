import { dataContext } from "@/app/dashboard/providerLayout";
import { useContext } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import CircleButton from "../atoms/CircleButton";

export default function TaskModal({ data, order, hanldeClose }) {
	const { folderFocus, dispatch } = useContext(dataContext);

	const updateContent = (type, content) => {
		dispatch({
			type: type,
			data: {
				folderOrder: folderFocus,
				docOrder: order,
				content,
			},
		});
	};

	return (
		<>
			<div className="bg-neutral-50 h-[90vh] w-[90%] max-w-[600px] p-4 rounded-md grid grid-rows-[min-content_1fr] gap-4">
				<div className="flex gap-2 items-center">
					<input
						type="text"
						value={data.title}
						className="bg-neutral-100 p-2 rounded-md grow text-xl font-medium"
						placeholder="Title content"
						onChange={(e) => updateContent("rename-document", e.target.value)}
					/>
					<CircleButton onClick={hanldeClose}>
						<HiOutlineXMark className="text-2xl" />
					</CircleButton>
				</div>
					<textarea
						placeholder="Content Here"
						value={data.content}
						className="bg-neutral-100 text-lg p-2 rounded-md resize-none"
						onChange={(e) =>updateContent("update-document", e.target.value)}
					/>
			</div>
		</>
	);
}
