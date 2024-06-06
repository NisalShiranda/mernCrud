// import React from 'react'
import "./Navbar.css"
 import { Link } from "react-router-dom"
// import Home from "../Home/Home"

function Navbar() {
  return (
    <>
        <div className="navbar">
            <ul className="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/userdetails">User Details</Link></li>
                <li><Link to="/adduser">Add User</Link></li>
                
            </ul>
            
        </div>
    </>
  )
}

export default Navbar