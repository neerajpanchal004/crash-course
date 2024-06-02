import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthProvider } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const {setEmail,setIsAuthenticated,setToken}=useContext(AuthProvider)
    const [useremail, setUseremail] = useState(null)
    const [password, setPassword] = useState(null)
    async function fetchData(){
        try {
            let res = await axios.post("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",{email:useremail,password})
            alert("user login sucessfully")
            setToken(res?.data?.token)
            setEmail(useremail)
            setIsAuthenticated(true)
            navigate('/')
            
        } catch (error) {
            // alert(error)
           console.log(error) 
        }
    }
  return (
    <div className='border-2 border-black flex-col h-96 w-96 p-10 bg-slate-200 align-middle justify-center gap-10 mx-auto'>
        <input type='email' required placeholder='email' value={useremail} onChange={(e)=>setUseremail(e.target.value)}/>
        <input className='my-10' type='password' required placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <div><button className='bg-blue-500 px-5 py-2 mt-10 ml-10 rounded-lg' onClick={fetchData}>Login</button></div>
    </div>
  )
}

export default Login