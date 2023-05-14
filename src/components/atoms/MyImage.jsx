import Image from "next/image";

export default function MyImage({ className, src, alt }) {
	return (
		<>
			<div className={`${className} relative`}>
				<Image src={src} alt={alt} layout="fill" objectFit="cover" />
			</div>
		</>
	);
}
