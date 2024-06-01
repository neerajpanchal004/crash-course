import { createContext, useState } from "react";

export const AuthProvider = createContext();

export const AuthContext = ({children})=>{
    const [isLogin, setIsLogin] = useState(false)
    const [token, setToken] = useState(null)
    return <AuthProvider.Provider value={{isLogin,setIsLogin,token,setToken}}>
        {children}
    </AuthProvider.Provider>

}

