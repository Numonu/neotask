import { AiOutlineFolderOpen } from "react-icons/ai";

export default function FolderTemplate() {

    const create = (e) => {
        if(e == "Enter" || !e){
            //here create a folder
        }
    }

	return (
		<>
			<div
				className="bg-neutral-800 text-neutral-50  py-3 px-4 flex items-center gap-2 rounded-lg hover:py-3 transition-[background-color_padding_color] outline-outline group"
                onKeyDown={(e) => create(e.key)}
			>
				<div className="text-2xl">
					<AiOutlineFolderOpen />
				</div>
				<span className="text-xl capitalize">
					<input type="text" className="bg-neutral-700" autoFocus="true" onBlur={() => create("Enter")}/>
				</span>
			</div>
		</>
	);
}
