import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import ProductDetails from './ProductDetails'
import Private from './Private'

const AllRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Private><Home/></Private>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/productdetails/:id' element={<Private><ProductDetails/></Private>} />
    </Routes>
    </>
  )
}

export default AllRoutes