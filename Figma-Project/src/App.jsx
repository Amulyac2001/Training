import './App.css'
import { I1 } from './assets/png/index'
import React, { useRef } from "react";
import RoutesHandler from './routes/RoutesHandler'
import Nav from './common/Navbar/Nav'
import Card from './common/CardFunctionality/Card'
import ChestKeyFunctionality from './components/ChestKeyFunctionality'
import RewardKeyFunctionality from './components/RewardKeyFunctionality'
import RewardCalenderFunctionality from './components/RewardCalenderFunctionality'

function App() {

  return (
    <div>
      <RoutesHandler />
      <div className='flex flex-row border-5 border-[#0D0F13] bg-[#08092B]'>
        <Nav />
        <div className='w-[1411px] h-[298px]'>
          <img src={I1} alt="" />
        </div>
      </div>
      <div className='flex flex-row gap-4 p-6 bg-[#0d0a22] min-h-screen justify-center overflow-x-auto'>
      <h2 className='text-white'>Chest Keys</h2>
        <ChestKeyFunctionality />
      </div>
      <div className='flex flex-row gap-4 p-6 bg-[#0d0a22] min-h-screen justify-center overflow-x-auto'>
      <h2 className='text-white'>Rewards Keys</h2>
        <RewardKeyFunctionality />
      </div>
      <div className='flex flex-row gap-4 p-6 bg-[#0d0a22] min-h-screen justify-center overflow-x-auto'>
      <h2 className='text-white'>Rewards Calender</h2>
        <RewardCalenderFunctionality />
      </div>
      </div> 

  )
}

export default App
