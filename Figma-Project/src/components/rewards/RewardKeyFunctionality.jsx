import React from "react";
import { rewardKeyData } from "../constants/rewardKeyData"
import Card from "../../common/CardFunctionality/Card";
import Scroll from "../../common/ScrollFunctionality/ScrollForChestKeyData";

function RewardKeyFunctionality() {
    return (
        <>
            <div>
                <h2 className='text-white pr-[1190px]'>Rewards Keys</h2>
                <div className="flex gap-4 overflow-x-auto ">
                    {rewardKeyData.map((data) => (
                        <div key={data.id}>
                            <Card img={data.img} title={data.title} btndata={data.btn} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RewardKeyFunctionality