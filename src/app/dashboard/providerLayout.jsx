"use client";
import { db } from "@/firebase/config";
import { dataReducer } from "@/utilities/dataReducer";
import { initialData } from "@/utilities/initialData";
import { doc, updateDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { authContext } from "./authLayout";

export const dataContext = createContext(null);
export default function ProviderLayout({ children }) {
	const user = useContext(authContext);
	
	const [saveData , setSaveData] = useState(true);
	const [folderFocus, setFolderFocus] = useState(0);
	
	const loadThis = localStorage["neotask-local-data"] ? JSON.parse(localStorage["neotask-local-data"]) : null;
	const [data, dispatch] = useReducer(dataReducer ,loadThis || initialData);
	console.log("data is " , data);
	console.log("load is " , loadThis);

	useEffect(() => {
		localStorage.setItem("neotask-local-data" , JSON.stringify(data));
		if(saveData && user){
			updateDoc(doc(db , "users" , user.uid) , {
				data : JSON.stringify(data)
			}).then(() => {
				setTimeout(() => {
					setSaveData(true);
				} , 15000)
			}).catch(e => {
				console.error(e);
			})
			setSaveData(false);
		}
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
