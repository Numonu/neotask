export default function Title({className , children}) {
	return (
		<>
			<h1 className={`text-4xl font-bold ${className} `}>{children}</h1>
		</>
	);
}
