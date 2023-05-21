"use client";

import { useRef } from "react";

export default function Modal({ children, callback }) {
	const autoRef = useRef(null);
	return (
		<div
			ref={autoRef}
			className="bg-neutral-900 bg-opacity-70 animated-reveal backdrop-blur-sm fixed z-[100] w-screen h-screen flex justify-center items-center"
			onClick={(e) => {
				(e.target == autoRef.current ) && callback();
			}}
		>
			{children}
		</div>
	);
}
