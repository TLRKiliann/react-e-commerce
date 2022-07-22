import { createContext, ReactNode, useContext, useState } from "react"
import axios from "axios"
//import Subscribe from "../components/Subscribe"
import Login from "../components/Login"
//import SignUp from "../components/SignUp"
//import { useLocalStorage } from "../hooks/useLocalStorage"


//ReactNode the type that you give to change 
//property into children
type Props = {
    children: ReactNode
}

//We need context for btn add and minus in store
type AuthContextType = {
    turnLogin: () => void
    setTurnLogin: () => void
    /*email: string
    password: string
    success: boolean
    //onSubmit: (email: string, password: string, success: boolean)
    onSbumit: (value: string) => void*/
}

//createContext by convention
const AuthContext = createContext({} as AuthContextType);

export function useAuthLogin() {
    return useContext(AuthContext)
};

export function AuthContextProvider({ children }: Props) {

    const [switchLogin, setSwitchLogin] = useState(false)

    const turnLogin = () => setSwitchLogin(true)
    const setTurnLogin = () => setSwitchLogin(false)

        
            //const turnLogin = () => setSwitchLogin(true);
        /*if (success === true) {
            setTurnLogin(false)
            console.log("Done", success, turnLogin)
            return
            //setSuccess(false)
        } else {
            setTurnLogin(true)
            console.log("Error", success, turnLogin)
            return
        }*/


    /* 
    const { email, password } = useLocalStorage<Array<Login>>(
        "login", []);*/

    return (
        <AuthContext.Provider value={{
            turnLogin,
            setTurnLogin
            /*success,
            email,
            password,
            onSubmit,
            turnLogin,
            switchLogin*/
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
