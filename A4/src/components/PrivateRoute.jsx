import React, { useContext } from 'react'
import { AuthProvider } from '../context/Authprovider'
import { Navigate, } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isLogin}=useContext(AuthProvider)
   return isLogin ? children : <Navigate to="/login" />
}

export default PrivateRoute