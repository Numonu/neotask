import { useState } from "react";
export default function Input({icon , placeholder , required , type="text"}) {
	const [focus, setFocus] = useState(false);

	const on = () => setFocus(true);
	const off = () => setFocus(false);

	return (
		<>
			<div
				className={`${focus && "border-amber-500"} 
                border-black border-2 rounded-lg p-2 flex items-center gap-2 transition-colors`}
				onFocus={on}
				onBlur={off}
			>
				<div
					className={`${focus && "text-amber-500"} 
                    text-3xl transition-colors`}
				>
					{icon}
				</div>
				<input
					className="text-xl grow outline-none"
                    type={type}
					placeholder={placeholder}
					required={required}
				/>
			</div>
		</>
	);
}
