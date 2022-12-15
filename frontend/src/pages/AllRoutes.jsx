import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from './Home'
import Login from "./Login"
import Marketplace from './market'
import Signup from './SignUP'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      
    </Routes>
  );
}

export default AllRoutes
