"use client";
import { dataReducer } from "@/utilities/dataReducer";
import { initialData } from "@/utilities/initialData";
import { createContext, useReducer, useState } from "react";

export const dataContext = createContext(null);
export default function ProviderLayout({ children }) {
	const [folderFocus, setFolderFocus] = useState(0);
	const [data, dispatch] = useReducer(dataReducer, initialData);
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
