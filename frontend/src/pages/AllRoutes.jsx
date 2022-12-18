import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from './Home'
import Login from "./Login"
import Interfacedesigner from './Interface-designer'
import Marketplace from './Marketplace'
import Signup from './SignUP'
import WorkSpace from '../component/dashboard/WorkSpace'
import Base from '../component/dashboard/Base'
import Price from './price'
import Template from './template'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/interface" element={<Interfacedesigner/>} />
      <Route path="/marketplace" element={<Marketplace/>} />
      <Route path="/workspace" element={<WorkSpace/>} />
      <Route path="/base" element={<Base/>} />
      <Route path="/price" element={<Price/>} />
      <Route path="/template" element={<Template/>} />
    </Routes>
  );
}

export default AllRoutes;

