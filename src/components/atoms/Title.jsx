export default function Title({className , children}) {
	return (
		<>
			<h1 className={`${className} text-4xl font-bold`}>{children}</h1>
		</>
	);
}
