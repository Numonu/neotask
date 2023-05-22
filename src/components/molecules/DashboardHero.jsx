import Paragraph from "../atoms/Paragraph";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";

export default function DashboardHero() {
	return (
		<>
			<div className="max-w-[1200px] mx-auto px-4 py-5 flex flex-col gap-2">
				<Subtitle className="-mb-4">welcome</Subtitle>
				<Title>Username</Title>
				<Paragraph>
					Did you know that you can customize this welcome message in
					the settings section ?
				</Paragraph>
			</div>
		</>
	);
}
