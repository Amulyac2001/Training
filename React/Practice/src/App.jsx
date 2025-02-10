import './App.css'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx';

function App(){
  const [count,setCount]=useState(0);
  return(
    // <div>
    //   <div>Count:{count}</div>
    //   <button onClick={()=>setCount(count+1)}>Increment</button>
    //   <button onClick={()=>setCount(count-1)}>Decrement</button>
    // </div>
    <div>
      <Header name={"Amulya"} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;