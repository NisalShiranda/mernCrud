// import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
        <div className="navbar">
                <ul className="list">
                    <li>
                        <Link to="/mainhome"><h1>Home</h1></Link>
                    </li>
                    <li>
                        <Link to="/adduser"><h1>Add User</h1></Link>
                    </li>
                    <li>
                        <Link to="/userdetails"><h1>User Details</h1></Link>
                    </li>
                    {/* <li>
                        <Link to="/mainhome"><h1>Contact</h1></Link>
                    </li> */}
                </ul>
        </div>
    </>
  )
}

export default Navbar