import React from "react";
import { rewardCalenderData } from "../constants/rewardCalenderData";
import Card from "../../common/CardFunctionality/Card";

function RewardCalenderFunctionality() {
    return (
        <>
            <div>
                <h2 className='text-white pr-[750px]'>Rewards Calender</h2>
                <div className="flex gap-4 overflow-x-auto pt-[-20px]">
                    {rewardCalenderData.map((data) => (
                        <Card key={data.id} img={data.img} title={data.title} btndata={data.btn} />
                    ))}
                </div>
            </div> 
        </>
    )
}

export default RewardCalenderFunctionality