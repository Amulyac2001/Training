import React from 'react'
import { useState,useEffect } from 'react'

const Footer = () => {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      console.log({count})
    },2000)
  },[count]);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Footer
