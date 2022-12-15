import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from './Home'
import Interfacedesigner from './Interface-designer'
import Login from "./Login"
import Marketplace from './Marketplace'
import Signup from './SignUP'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/interface" element={<Interfacedesigner/>} />
      <Route path="/marketplace" element={<Marketplace/>} />
    </Routes>
  );
}

export default AllRoutes
