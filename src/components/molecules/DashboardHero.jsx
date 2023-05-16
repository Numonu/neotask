import Paragraph from "../atoms/Paragraph";
import Search from "../atoms/Search";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";

export default function DashboardHero() {
	return (
		<>
			<div className="max-w-[1200px] mx-auto px-4 py-5 flex flex-col gap-2">
				<Subtitle className="-mb-4">welcome</Subtitle>
				<Title>Numonu</Title>
				<Paragraph className="mb-4">
					Did you know that you can customize this welcome message in
					the settings section ?
				</Paragraph>
				<Search />
			</div>
		</>
	);
}
