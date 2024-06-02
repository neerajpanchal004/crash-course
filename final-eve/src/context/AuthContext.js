import { createContext, useState } from "react";

export const AuthProvider = createContext();

export const AuthContext = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState(null)

    return <AuthProvider.Provider value={{isAuthenticated,setIsAuthenticated,email,setEmail,token,setToken}}>{children}</AuthProvider.Provider>

}