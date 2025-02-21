import './App.css'
import { I1 } from './assets/png/index'
import React from "react";
import RoutesHandler from './routes/RoutesHandler'
import Nav from './common/Navbar/Nav'
import ScrollForRewardCalenderData from './common/ScrollFunctionality/ScrollForRewardCalenderData'
import ScrollForChestKeyData from './common/ScrollFunctionality/ScrollForChestKeyData'
import ScrollForRewardKeyData from './common/ScrollFunctionality/ScrollForRewardKeyData'

function App() {

  return (
    <div>
      <RoutesHandler />
      <div className='flex flex-row border-5 border-[#0D0F13] bg-[#08092B]'>
        <Nav />
        <div className='w-[1411px] h-[298px] flex flex-col'>
          <img src={I1} alt="" />
          <div className='border-solid border-4'>
            <h4>Chest Keys</h4>
            <ScrollForChestKeyData />
          </div>
          <div className='border-solid border-4'>
            <h4>Rewards Keys</h4>
            <ScrollForRewardKeyData />
          </div>
          <div className='border-solid border-4'>
            <h4>Rewards Calender</h4>
            <ScrollForRewardCalenderData />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
