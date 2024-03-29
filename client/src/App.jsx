import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import Userpage from './Userpage'
import Adminpage from './Adminpage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> }></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/userpage' element={<Userpage/>}></Route>
        <Route path='/adminpage' element={<Adminpage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App