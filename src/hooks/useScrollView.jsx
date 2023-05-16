"use client"
import { useState , useEffect } from "react";

export default function useScrollView(threshold){
    const [scrollOver, setScrollOver ] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollValue = window.pageYOffset;
			scrollValue > threshold && !scrollOver && setScrollOver(true);
			scrollValue < threshold && scrollOver && setScrollOver(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollOver , threshold]);


    return {
        scrollOver
    }
}