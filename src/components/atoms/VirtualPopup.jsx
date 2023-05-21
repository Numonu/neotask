"use client";
import { useEffect, useRef, useState } from "react";

export default function VirtualPopup({ closeContent, openContent, openSize }) {
	//for position
	const container = useRef(null);
	const [rect, setRect] = useState(null);
	//for events
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const _rect = container.current.getBoundingClientRect();
		setRect(_rect);
		console.log(_rect);
	}, []);

	return (
		<>
			<div>
				<div className="opacity-0 w-full h-full" ref={container}>
					{closeContent}
				</div>
				<div
					onClick={() => setOpen(true)}
					className={`${open && "opacity-0 pointer-events-none"} 
                    absolute pointer-events-auto transition-opacity duration-500`}
					style={
						rect && {
							left: rect.left,
							top: rect.top,
							width: rect.width,
							height: rect.height,
						}
					}
				>
					{closeContent}
				</div>
                <div
					onClick={() => setOpen(false)}
					className={`${open && "opacity-100 pointer-events-auto"} 
                    absolute opacity-0 translate-x-0 translate-y-0 pointer-events-none transition-[opacity_width_height_transform_left_top] duration-500`}
					style={
						rect && {
							left: !open ? rect.left : "50%",
							top: !open ? rect.top : "50%",
                            transform : open && "translateX(-50%) translateY(-50%)",
							width: !open ? rect.width : openSize.width,
							height: !open ? rect.height : openSize.height,
						}
					}
				>
					{openContent}
				</div>
			</div>
		</>
	);
}
