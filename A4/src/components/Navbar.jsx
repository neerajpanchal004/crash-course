import React, { useContext, useState } from 'react';
import { AuthProvider } from '../context/Authprovider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {isLogin,setIsLogin}=useContext(AuthProvider)

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
          <Link to="/ticket" className="text-white hover:text-gray-200">Tickets</Link>
          <Link to="/login" className="text-white hover:text-gray-200">{isLogin?"Logout":"Login"}</Link>
          {/* {isLogin ? (
            <button onClick={toggleLogin} className="text-white hover:text-gray-200">Logout</button>
          ) : (
            <button onClick={toggleLogin} className="text-white hover:text-gray-200">Login</button>
          )} */}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
