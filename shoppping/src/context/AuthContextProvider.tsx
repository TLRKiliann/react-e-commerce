import { createContext, ReactNode, useContext, useState } from "react"
import axios from "axios"
//import Subscribe from "../components/Subscribe"
//import Login from "../components/Login"
//import SignUp from "../components/SignUp"
//import { useLocalStorage } from "../hooks/useLocalStorage"


//ReactNode the type that you give to change 
//property into children
type Props = {
    children: ReactNode
}

//We need context for btn add and minus in store
type AuthContext = {
    email: string
    setEmail: string
    switchLogin: boolean
    setSwitchLogin: boolean
    toggle: () => void
    eraseAll: () => void
}

//createContext by convention
const AuthContext = createContext({} as AuthContext);

export function useAuthLogin() {
    return useContext(AuthContext)
};

export function AuthContextProvider({ children }: Props) {

    const [switchLogin, setSwitchLogin] = useState(true)
    const [email, setEmail] = useState("")

    function toggle() {
        setSwitchLogin(!switchLogin)
        localStorage.removeItem('Passwd')
        localStorage.removeItem('Email')
        localStorage.removeItem('Shopping-cart')
    }

    function eraseAll() {
        setEmail("")
    }

    /*const turnLogin = () => setSwitchLogin(true)
    const setTurnLogin = () => setSwitchLogin(false)*/

    /* 
    const { email, password } = useLocalStorage<Array<Login>>(
        "login", []);*/

    return (
        <AuthContext.Provider value={{
            email,
            setEmail,
            switchLogin,
            setSwitchLogin,
            toggle,
            eraseAll
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
