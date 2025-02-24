import { useState, useRef, useEffect } from "react";

export default function SlidingButton() {
  const [position, setPosition] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!revealed) {
      const timer = setTimeout(() => setPosition(0), 500);
      return () => clearTimeout(timer);
    }
  }, [revealed]);

  const handleClick = () => {
    const slider = sliderRef.current;
    const sliderWidth = slider.offsetWidth;
    const maxPosition = sliderWidth - 32; 
    setPosition(maxPosition);
    setRevealed(true);


    setTimeout(() => {
      setPosition(0);
      setRevealed(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Slider Container */}
      <div ref={sliderRef} className="relative w-32 h-10 bg-gray-700 rounded-full flex items-center p-1">
        {/* Revealed Data */}
        <div className={`absolute left-2 text-white text-sm transition-opacity duration-300 ${revealed ? "opacity-100" : "opacity-0"}`}>
          786475.13
        </div>
        
        {/* Sliding Button */}
        <div
          className="w-8 h-8 bg-yellow-500 rounded-full cursor-pointer shadow-lg transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${position}px)` }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}