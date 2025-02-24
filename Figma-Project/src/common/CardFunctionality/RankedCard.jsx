// import { I2 } from "../../assets/png";

// export default function CurrentRankCard() {
//     return (
//       <div className="w-[400px] h-[330px] bg-gray-800 rounded-lg p-6 flex flex-col justify-between shadow-lg">
//         {/* Title */}
//         <div className="flex justify-between items-center text-white">
//           <span className="text-lg font-semibold">Unranked</span>
//           <button className="text-sm text-gray-400 hover:text-white">
//             See all ranks ▾
//           </button>
//         </div>
  
//         {/* Rank Display */}
//         <div className="flex flex-col items-center mt-4">
//           {/* Circular Progress Bar */}
//           <div className="relative w-24 h-24">
//             {/* Outer Circle */}
//             <svg className="w-full h-full transform -rotate-90">
//               <circle
//                 cx="48"
//                 cy="48"
//                 r="40"
//                 stroke="gray"
//                 strokeWidth="8"
//                 fill="none"
//               />
//               <circle
//                 cx="48"
//                 cy="48"
//                 r="40"
//                 stroke="limegreen"
//                 strokeWidth="8"
//                 strokeDasharray="251.2"
//                 strokeDashoffset="180"
//                 strokeLinecap="round"
//                 fill="none"
//               />
//             </svg>
//             {/* Rank Badge */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center">
//                 <img
//                   src={I2}
//                   alt="Rank Badge"
//                   className="w-10 h-10"
//                 />
//               </div>
//             </div>
//           </div>
  
//           {/* Rank Name */}
//         </div>
  
//         {/* Rank Progress */}
//         <div className="mt-4">
//           <p className="text-yellow-400 font-semibold flex items-center">
//             <span className="text-lg">💰 10,000.00</span>
//             <span className="text-sm text-gray-400 ml-2">
//               remaining to rank up
//             </span>
//           </p>
//         </div>
  
//         {/* View Chest Button */}
//         <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg text-center font-semibold hover:bg-blue-600 transition">
//           View Chest
//         </button>
//       </div>
//     );
//   }



  
import React from "react";
import {I2} from '../../assets/png/index'

const RankCard = () => {
  return (
    <div className="bg-[#0F0F1A] rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br from-purple-900 via-purple-950 to-black">
      
      <div className="flex justify-between text-sm text-gray-300">
        <span>Unranked</span> 
        <select id="ranks" name="ranks">
        <option value="bronze">see all ranks</option>
        <option value="silver">Silver</option>
        <option value="gold">Gold</option>
        <option value="platinum">Platinum</option>
        <option value="diamond">Diamond</option>
        </select>
      </div>

      <div className="relative flex justify-center items-center my-6">
        <img src={I2} alt="Rank" className="w-[150px] h-[150px] "/>
      </div>

      <div className="flex justify-center gap-20 mb-2">
      <div className="flex flex-col text-sm mt-2">
        <span className="text-yellow-400 text-lg font-semibold">10000</span>
        <span className=" text-gray-400">rank up to</span>
      </div>

      <button className="bg-blue-600 text-white w-25 h-10 mt-3 py-2 rounded-lg hover:bg-blue-400 hover:scale-105">
        View Chest
      </button>
      </div>
    </div>
  );
};

export default RankCard;