import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Ticket from './Ticket'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import CreateTicket from './CreateTicket'
import ViewPage from './ViewPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path='/about' element={<PrivateRoute><About/></PrivateRoute>} />
        <Route path='/contact' element={<PrivateRoute><Contact/></PrivateRoute>} />
        <Route path='/ticket' element={<PrivateRoute><Ticket/></PrivateRoute>} />
        <Route path='/createticket' element={<PrivateRoute><CreateTicket/></PrivateRoute>} />
        <Route path='/viewticket/:id' element={<PrivateRoute><ViewPage/></PrivateRoute>} />


        <Route path='/login' element={<Login/>} />

    </Routes>
  )
}

export default AllRoutes