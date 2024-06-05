import React from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Adduser from './Components/Adduser/Adduser'
import Userdetails from './Components/Userdetails/Userdetails'

function App() {
 
  return (
    <>
      {/* <Navbar /> */}
      {/* <Home /> */}
      <Navbar />
      <React.Fragment>
        <Routes>
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/userdetails" element={<Userdetails />} />

        </Routes>

      </React.Fragment>
      
    </>
  )
}

export default App
