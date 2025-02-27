import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>     
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

// store ka access

export default App
