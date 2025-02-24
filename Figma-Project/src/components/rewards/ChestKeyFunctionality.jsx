import React from "react";
import { ChestKeyData } from "../constants/ChestKeyData";
import Card from "../../common/CardFunctionality/Card";
import Scroll from "../../common/ScrollFunctionality/ScrollForChestKeyData";

function ChestKeyFunctionality() {
    return (
        <>
            <div>
                <h2 className='text-white pr-[950px] pb-[5px]'>Chest Keys</h2>
                <div className="flex gap-4 overflow-x-auto">
                    {ChestKeyData.map((data) => (
                        <div key={data.id}>
                            <Card img={data.img} title={data.title} btndata={data.btn} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ChestKeyFunctionality