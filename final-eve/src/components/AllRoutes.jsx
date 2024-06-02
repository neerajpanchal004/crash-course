import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import ProductDetails from './ProductDetails'

const AllRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/productdetails/:id' element={<ProductDetails/>} />
    </Routes>
    </>
  )
}

export default AllRoutes