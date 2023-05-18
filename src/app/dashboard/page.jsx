"use client";
import Head from "next/head";
import DashboardHead from "@/components/organisms/DashboardHead";
import DashboardHero from "@/components/molecules/DashboardHero";
import DashboardWorkspace from "@/components/organisms/DashboardWorkspace";
import { dataReducer } from "@/utilities/dataReducer";
import { createContext, useReducer } from "react";

export const metadata = {
    title : "Manage your Notes",
    description : "Create , update adn delete notes"
}

const initalData = [
	{
		folderName : "all",
		documents : [	
			{
				title : "Initial Document",
				content : "this es a example content!"
			}
		],
		config : {
			protecteed : true,
		}
	}
]

export const dataContext = createContext(null);
export default function Dashboard() {
	const [data , dispatch] = useReducer(dataReducer , initalData);
	return (
		<>
			<Head>
				<title>Manage your Notes</title>
			</Head>
			<div className="bg-neutral-50 text-neutral-800 h-[200vh]">
				<dataContext.Provider>
					<DashboardHead/>
                	<DashboardHero/>
					<DashboardWorkspace/>
				</dataContext.Provider>
			</div>
		</>
	);
}
