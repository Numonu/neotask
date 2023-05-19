"use client";
import DashboardFolders from "@/components/molecules/DashboardFolders";
import { dataReducer } from "@/utilities/dataReducer";
import { initialData } from "@/utilities/initialData";
import { createContext, useReducer, useState } from "react";
import Search from "../atoms/Search";
import DashboardTasks from "../molecules/DashboardTasks";

export const dataContext = createContext(null);
export default function DashboardWorkspace() {
	const [folderFocus , setFolderFocus] = useState(0);
	const [data, dispatch] = useReducer(dataReducer, initialData);
	return (
		<>
			<div className="max-w-[1200px] mx-auto px-4">
				<dataContext.Provider value={{
					data , 
					dispatch,
					folderFocus,
					setFolderFocus,
				}}>
					<Search />
					<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[1fr_3fr]">
						<DashboardFolders />
						<DashboardTasks />
					</div>
				</dataContext.Provider>
			</div>
		</>
	);
}
