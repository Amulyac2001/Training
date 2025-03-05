import React from "react";
import { rewardCalenderData } from "../constants/rewardCalenderData";
import Card from "../../common/CardFunctionality/Card";

function RewardCalenderFunctionality() {
    return (
        <>
            <div>
                <h3 className='text-white'>Rewards Calender</h3>
                <div className="flex gap-4 overflow-x-auto">
                    {rewardCalenderData.map((data) => (
                        <Card key={data.id} img={data.img} title={data.title} btndata={data.btn} />
                    ))}
                </div>
            </div> 
        </>
    )
}

export default RewardCalenderFunctionality