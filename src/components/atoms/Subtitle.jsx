export default function Subtitle({ className, children }) {
	return (
		<>
			<h2 className={`${className} text-2xl font-medium`}>{children}</h2>
		</>
	);
}
