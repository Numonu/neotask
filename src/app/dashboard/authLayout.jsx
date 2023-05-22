"use client";

import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext(null);
export default function AuthLayout({children}){
    const [user , setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser(null);
            }
        })
        return () => unsubscribe();
    } , [])

    return <>
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    </>
}