// import React from 'react'
import { useState } from "react";
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import { useEffect } from "react";

const URL = 'http://localhost:5000/users'

const fetchHandler = async () => {
    return await axios.get(URL).then((res)=>res.data);
}

function Userdetails() {

    const [users, SetUsers] = useState();

    useEffect(() => {
        fetchHandler().then((data) => SetUsers(data.users));
    },[])






  return (
    <div>
        <Navbar />
        <h1>Userdetails</h1>
    </div>
  )
}

export default Userdetails