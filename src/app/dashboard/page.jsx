"use client";
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
			<div className="h-[200vh]">
				<dataContext.Provider>
                	<DashboardHero/>
					<DashboardWorkspace/>
				</dataContext.Provider>
			</div>
		</>
	);
}
