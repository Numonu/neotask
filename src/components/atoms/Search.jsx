"use client"
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
export default function Search() {
	const [focus, setFocus] = useState(false);

	return (
		<>
			<div
				className={`${focus ? "border-amber-500" : "border-black"} 
                border-2 border-b-4 rounded-xl p-2 py-1 grid items-center grid-cols-[1fr_min-content] gap-2 transition-colors`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			>
				<input className="text-xl" type="text" placeholder="Search"/>
				<BsSearch className={`${focus && "text-amber-500"} text-2xl`} />
			</div>
		</>
	);
}
