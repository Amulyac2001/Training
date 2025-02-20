import React from 'react'
import { I7,I8,I9,I1,I11, I10 } from '../assets/png'
import Card from '../common/CardFunctionality/Card'

function ChestKeyFunctionality() {
    const arr=[I7,I8,I9,I10,I11]
    return (
        arr.map((a,index)=>(
            <div key={index}>
                <Card image={a} />
            </div>
        ))       
    )
}

export default ChestKeyFunctionality
