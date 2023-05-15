import Head from "next/head";
import HomeHero from "@/components/organisms/HomeHero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Welcome to Neotask</title>
			</Head>
			<div className="pattern-radial-points text-neutral-800 min-h-screen">
				<HomeHero />
			</div>
		</>
	);
}
