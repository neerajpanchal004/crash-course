import React, { useContext } from 'react'
import {AuthProvider } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {email,isAuthenticated,setIsAuthenticated,setEmail,setToken}= useContext(AuthProvider)
    function logout(){
      setIsAuthenticated(false)
      setEmail(null)
      setToken(null)
    }

  return (
    <div className='flex p-5 bg-blue-500 text-white font-semibold justify-around'>
        <Link to="/">Home</Link>
        {email}
        <Link to="/login">{isAuthenticated?<button onClick={logout}>Logout</button>:"Login"}</Link>

        

    </div>
  )
}

export default Navbar