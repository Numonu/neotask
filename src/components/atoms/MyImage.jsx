import Image from "next/image";

export default function MyImage({ className, src, alt, fill, width, height }) {
	if (fill) {
		return (
			<>
				<div className={`${className} relative`}>
					<Image
						src={src}
						alt={alt}
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</>
		);
	}
	return (
		<>
			<div className={`${className} relative`}>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					objectFit="cover"
				/>
			</div>
		</>
	);
}
