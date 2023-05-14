import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GiParrotHead } from "react-icons/gi";
import Button from "@/components/atoms/Button";
import Paragraph from "@/components/atoms/Paragraph";
import Subtitle from "@/components/atoms/Subtitle";
import Head from "next/head";
import HomeHero from "@/components/organisms/HomeHero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Welcome to Neotask</title>
			</Head>
			<div className="point-pattern text-neutral-800 min-h-screen">
				<HomeHero />
			</div>
		</>
	);
}
