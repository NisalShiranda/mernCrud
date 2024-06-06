
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

import './App.css'
// import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Userdetails from "./Components/Userdetails/Userdetails";
import Adduser from "./Components/Adduser/Adduser";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userdetails",
    element: <Userdetails />,
  },
  {
    path: "/adduser",
    element: <Adduser />,
  }
  
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
