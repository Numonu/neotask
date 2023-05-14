import { BsFillRocketTakeoffFill } from "react-icons/bs";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import Paragraph from "../atoms/Paragraph";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";

export default function HomeHero() {
	return (
		<>
			<div className="h-screen flex flex-col items-center justify-center text-center gap-4">
				<Logo />
				<Subtitle>with Neotask you can</Subtitle>
				<Title>
					It&apos;s very easy to do whatever <br /> you want to do
				</Title>
				<Paragraph>
					neotask is the perfect solution for writing, storing and
					organizing your notes.Shall we get started?
				</Paragraph>
				<Button className="mt-4">
					<BsFillRocketTakeoffFill />
					let&apos;s go
				</Button>
			</div>
		</>
	);
}
