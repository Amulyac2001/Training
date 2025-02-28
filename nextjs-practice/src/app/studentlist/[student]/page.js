"use client"
// jab bhi hum parameter get karna hota from url ha toh use client ka use karna hota ha.
export default function Student({params}){
    console.log(params)
    return(
        <div>
            <h1>Student Details</h1>
            <h4>{params.student}</h4>
        </div>
    )
}