// import React from "react";
// import { Link } from "react-router-dom";
// import SlidingButton from "../../common/btnSlider";

// const Header = () => {
//   return (
//     <header className=" bg-gray-900 w-[1521px] h-[60px] text-white py-4 px-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <nav>
//           <ul className="flex space-x-6 text-sm font-medium">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/About">About</Link></li>
//             <li><Link to="/Contact">Contact</Link></li>
//             <li><Link to="/Rewards">Rewards</Link></li>
//             <li><Link to="/Setting">Setting</Link></li>
//             <li><Link to="/Dashboard">Dashboard</Link></li>
//           </ul>
//         </nav>
//       </div>
//        {/* <SlidingButton /> */}
//     </header>
//   );
// };

// export default Header;


import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
    <header className="bg-gray-900 w-[1521px] h-[60px] text-white py-4 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Rewards">Rewards</Link></li>
            <li><Link to="/Setting">Setting</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        {/* Sliding Button */}
        <div ref={sliderRef} className="relative w-32 h-10 bg-gray-700 rounded-full flex items-center p-1">
          {/* Revealed Data */}
          <div
            className={`absolute left-2 text-white text-sm transition-opacity duration-300 ${
              revealed ? "opacity-100" : "opacity-0"
            }`}
          >
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
    </header>
  );
};

export default Header;
