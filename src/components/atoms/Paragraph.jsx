export default function Paragraph({ className, children }) {
	return (
		<>
			<p className={`${className} text-xl`}>
				{children}
			</p>
		</>
	);
}
