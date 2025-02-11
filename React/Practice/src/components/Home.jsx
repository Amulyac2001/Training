import React, { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {

  const [data,setData]=useState(0);

  useEffect(()=>{
    const res=fetch('https://jsonplaceholder.typicode.com/todos')
    res.then(res=>res.json())
    .then(d=>{setData(d)})
    console.log(data)
  },[data])
  return (
    <div>
        <h1>Home page</h1>
    </div>
  )
}

export default Home