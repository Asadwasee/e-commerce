import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Lists from './pages/Lists'
import { useContext } from 'react'
import { adminDataContext } from './context/adminContext'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  let {adminData} = useContext(adminDataContext)
  return (
    <>
    <ToastContainer />
    {!adminData ? <Login /> :
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add />} />
      <Route path='/login' element={<Login />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/lists' element={<Lists />} />
     </Routes>
     }
    </>
  )
}

export default App