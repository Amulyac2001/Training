import React from 'react'
import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <h1>{props}</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default About
