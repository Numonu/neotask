"use client";
import { dataReducer } from "@/utilities/dataReducer";
import { initialData } from "@/utilities/initialData";
import { createContext, useEffect, useReducer, useState } from "react";

export const dataContext = createContext(null);
export default function ProviderLayout({ children }) {
	const [folderFocus, setFolderFocus] = useState(0);
	const [data, dispatch] = useReducer(dataReducer, JSON.parse(localStorage.getItem("neotask-local-data")) || initialData);

	useEffect(() => {
		localStorage.setItem("neotask-local-data" , JSON.stringify(data));
	} , [data])

	return (
		<>
			<dataContext.Provider
				value={{
					data,
					dispatch,
					folderFocus,
					setFolderFocus,
				}}
			>
				{children}
			</dataContext.Provider>
		</>
	);
}
