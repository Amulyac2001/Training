import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate=useNavigate();

  const handleNavigate=()=>{
    navigate('/');
  }

  return (
    <div>
      <h1>Contact page</h1>
      <button onClick={handleNavigate}>Home</button>
    </div>
  )
}

export default Contact
