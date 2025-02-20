import React from 'react'
import { I12,I13,I14 } from '../assets/png'
import Card from '../common/CardFunctionality/Card'

function ChestKeyFunctionality() {
    const arr=[I12,I13,I14]
    return (
        arr.map((a,index)=>(
            <div key={index}>
                <Card image={a} />
            </div>
        ))       
    )
}

export default ChestKeyFunctionality
