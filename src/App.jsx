import { Fragment, useState } from 'react'
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    
    <Fragment>
      <Routes>
        <Route path="/" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
    {/* <div className='w-[100vh] h-[80vh] '>
    <h1 className="text-[250px]  font-bold text-blue-500">
      Developlearn 
    </h1>
    </div> */}
    </Routes>
    </Fragment>
  )
}
export default App
