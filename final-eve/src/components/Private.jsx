import React, { useContext } from 'react'
import { AuthProvider } from '../context/AuthContext'
import Login from './Login'
import { Navigate } from 'react-router-dom'

const Private = ({children}) => {
    const {isAuthenticated}=useContext(AuthProvider)
  return isAuthenticated ? children : <Navigate to='/login' />

}

export default Private
