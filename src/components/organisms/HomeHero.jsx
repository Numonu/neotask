import Image from "next/image";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import MyImage from "../atoms/MyImage";
import Paragraph from "../atoms/Paragraph";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";

export default function HomeHero() {
	return (
		<>
			<div className="h-screen grid grid-rows-[1fr_min-content]   place-items-center text-center">
				<MyImage
					className="absolute left-0 top-0 h-8 w-20"
					src="/svg/twoLines.svg"
					alt="double lines illustration"
					width={60}
					height={60}
				/>
				<div className="max-w-xl mx-auto px-4 flex flex-col gap-4">
					<Logo />
					<Subtitle>with Neotask you can</Subtitle>
					<Title>
						It&apos;s very easy to do whatever <br />
						you
						<span className="relative inline-block px-3">
							want
							<MyImage
								className="absolute h-8 w-20"
								src="/svg/underline.svg"
								alt="underline illustration"
								width={100}
								height={100}
							/>
						</span>
						to do
					</Title>
					<Paragraph className="mt-4">
						neotask is the perfect solution for writing, storing and
						organizing your notes.Shall we get started?
					</Paragraph>
					<div className="relative">
						<Button className="mt-4">
							<BsFillRocketTakeoffFill />
							let&apos;s go
						</Button>
						<MyImage
							className="absolute right-0 translate-y-1 w-16 h-9"
							src="svg/circleArrow.svg"
							alt="circle arrow illustration"
							width={100}
							height={100}
						/>
					</div>
				</div>
				<MyImage
					className="h-20 w-full"
					src="/svg/wave.svg"
					alt="wave illustration"
					fill
				/>
			</div>
		</>
	);
}
