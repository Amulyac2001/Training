import React from 'react'
import { I3,I4,I5,I6 } from '../assets/png'
import Card from '../common/CardFunctionality/Card'

function ChestKeyFunctionality() {
    const arr=[I3,I4,I5,I6]
    return (
        arr.map((a,index)=>(
            <div key={index}>
                <Card image={a} />
            </div>
        ))       
    )
}

export default ChestKeyFunctionality
