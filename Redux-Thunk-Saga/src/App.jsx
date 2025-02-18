import './App.css'
// import {Provider} from 'react-redux'
// import store from './redux/Store'
// import News from './components/News'

import { useDispatch,useSelector } from 'react-redux'
import { getUserFetch } from './actions'

function App() {

  const dispatch=useDispatch();
  const users=useSelector(state=>state.myFirstReducer.users);
  return (
    // <Provider store={store}>
    //   <h1>News App</h1>
    //   <News />
    // </Provider>
    <div>
      Users:{users.map((user=>(<div>{user.name}</div>)))}
      <button onClick={()=>dispatch(getUserFetch())}>Get User</button>
    </div>
  )
}

export default App
