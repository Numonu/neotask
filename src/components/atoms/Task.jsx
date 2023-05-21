"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import TaskModal from "../molecules/TaskModal";
import Modal from "./Modal";

export default function Task({ title, date }) {
	const [showDetails, setShowDetails] = useState(false);

	const hiddeDetails = () => setShowDetails(false);

	return (
		<>
			<button
				className="bg-neutral-50 w-full h-full pattern-points border-neutral-800 border-2 border-b-4 px-4 py-6 rounded-md text-start outline-offset-8 outline-outline hover:-translate-y-[0.2rem] hover:shadow-lg group transition-[transform_shadow]"
				onClick={() => setShowDetails(true)}
			>
				<div className="border-neutral-800 w-9 aspect-square border-4 rounded-xl mb-8 group-hover:rotate-45 transition-transform"></div>
				<h2 className="font-bold text-3xl mb-2">{title}</h2>
				<h3 className="font-medium">{date}</h3>
			</button>
			{showDetails &&
				createPortal(
					<Modal callback={hiddeDetails}>
						<TaskModal
							title={title}
							hanldeClose={hiddeDetails}
						/>
					</Modal>,
					document.getElementById("modal")
				)}
		</>
	);
}
