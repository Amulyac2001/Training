import './App.css'
import { I1 } from './assets/png/index'
import RankCard from './common/CardFunctionality/RankedCard';
import React from "react";
import RoutesHandler from './routes/RoutesHandler'
import Nav from './common/Navbar/Nav'
import ScrollForRewardCalenderData from './common/ScrollFunctionality/ScrollForRewardCalenderData'
import ScrollForChestKeyData from './common/ScrollFunctionality/ScrollForChestKeyData'
import ScrollForRewardKeyData from './common/ScrollFunctionality/ScrollForRewardKeyData'
import Header from './components/Headers/header';


export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="items-center justify-center h-screen">
      <RoutesHandler />
      <Header />
    <div className="w-[1521px] h-[1612px] flex bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-[53px] h-[1113px] bg-gray-800 flex-shrink-0">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-8 py-6 space-y-8">
        {/* Banner */}
        <div className="w-[1411px] h-[298px]">
          <img src={I1} alt="banner image" className="w-full h-full rounded-lg object-cover" />
        </div>

        {/* Rank and Chest Keys Section */}
        <div className="flex">
          {/* Rank Section */}
          <div className="flex flex-col space-y-6 w-[340px] ">
            <h3 className='pt-[12px] mb-[10px] pr-[200px]'>Your Current Rank</h3>
            <div className="w-[340px] h-[330px] bg-gray-800 rounded-2xl">
              <RankCard />
            </div>
          </div>

          {/* Chest Keys Section */}
          <div className="flex ">
            <div className="overflow-x-auto">
              <div className="flex">
                <ScrollForChestKeyData />
              </div>
            </div>
          </div>
          {/* <div className="w-full">
            <h3 className="text-lg font-semibold mb-2">Chest Keys</h3>
            <div className="w-[950px] h-[330px] bg-gray-800 rounded-lg overflow-x-auto flex items-center p-4">
              <div className="flex space-x-6 w-max">
                <ScrollForChestKeyData />
              </div>
            </div>
          </div> */}
        </div>




        {/* Rewards Keys */}
        <div>
          <div className="overflow-x-auto">
            <div className="flex space-x-6 w-max">
              <ScrollForRewardKeyData />
            </div>
          </div>
        </div>


        {/* Rewards Calendar */}
        <div>
          <div className="overflow-x-auto">
            <div className="flex space-x-6 w-max">
              <ScrollForRewardCalenderData />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
