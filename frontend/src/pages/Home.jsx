import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MidContent from '../component/MidContent'
import Navbar from "../component/Navbar"

const Home = () => {
   const {isAuth} = useSelector((store) => store.userLogin);
   
   if (isAuth) {
     return <Navigate to={"/workspace"} />;
   }

  return (
    <div>
      <Navbar/>
       
      <MidContent/>   
    </div>
  )
}

export default Home
