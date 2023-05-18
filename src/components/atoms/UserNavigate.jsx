"use client";

import { auth } from "@/libs/firebase.init";
import { useRouter } from "next/navigation";

export default function UserNavigate({children , href="#"}){
    const router = useRouter();
    const verifyUser = () => {
        const user = auth.currentUser;
        if(user) 
            router.push(href);
        else 
            router.push("/login");
    }

    return <div onClick={verifyUser}>
        {children}
    </div>
}