import React from "react";
import { useRef } from "react";
import RewardKeyFunctionality from '../../components/rewards/RewardKeyFunctionality'

const Scroll = () => {
    const scrollContainerRef = useRef(null);
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };
    return (
        <div className="relative w-full">
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 transition"
            >&lt;</button>
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 transition"
            >&gt;</button>
            <div 
            ref={scrollContainerRef} 
            className="flex gap-4 overflow-x-auto p-4 scrollbar-hide scroll-smooth"
            >
                <RewardKeyFunctionality />
            </div>
        </div>

    )
}

export default Scroll;