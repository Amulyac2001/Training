import './App.css'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import HandleApi from './HandleApi.jsx';
import ClassComponent from './classComponent.jsx';
import ComponentLifecycle from './ComponentLifecycle.jsx'
import ReactForm from './ReactForm.jsx';

function App(){
  const [count,setCount]=useState(0);
  return(
    // <div>
    //   <div>Count:{count}</div>
    //   <button onClick={()=>setCount(count+1)}>Increment</button>
    //   <button onClick={()=>setCount(count-1)}>Decrement</button>
    // </div>
    <div>
      {/* <Header name={"Amulya"} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
      {/* <HandleApi /> */}
      {/* <Footer /> */}
      {/* <ClassComponent /> */}
      {/* <Home /> */}
      {/* <ComponentLifecycle name="Amulya" /> */}
      <ReactForm />
    </div>
  )
}

export default App;