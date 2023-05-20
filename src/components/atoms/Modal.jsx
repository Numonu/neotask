"use client";
import { createPortal } from "react-dom";

export default function Modal({children}){
    return <> 
        {
            createPortal( <div className="bg-neutral-900 bg-opacity-70 backdrop-blur-sm fixed z-50 w-screen h-screen flex justify-center items-center">
                {children}
            </div> , window.document.body)
        }
    </>
}