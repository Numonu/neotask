export default function SoulHover({ children }) {
	return (
		<>
			<div className="group relative">
				<div className="absolute group-hover:scale-[1.5] group-hover:opacity-0 duration-0 group-hover:duration-500 transition-[opacity_scale]">
					{children}
				</div>
                <div className="relative">
				    {children}
                </div>
			</div>
		</>
	);
}
