"use client"
import { useState } from "react";
export default function Input({icon , placeholder , required , type="text" , onChange}) {
	const [focus, setFocus] = useState(false);

	return (
		<>
			<div
				className={`${focus ? "border-amber-500" : "border-black"} 
                border-2 rounded-lg p-2 flex items-center gap-2 transition-colors`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			>
				<div
					className={`${focus && "text-amber-500"} 
                    text-3xl transition-colors`}
				>
					{icon}
				</div>
				<input
					className="text-xl grow outline-none placeholder:capitalize"
                    type={type}
					placeholder={placeholder}
					required={required}
					onChange={e => onChange(e.target.value)}
				/>
			</div>
		</>
	);
}
