import { createContext, ReactNode, useContext, useState } from "react"
import axios from "axios"

type Props = {
    children: ReactNode
}

type AuthContext = {
    usrEmail: string
    setUsrEmail: string
    email: string
    setEmail: string
    switchLogin: boolean
    setSwitchLogin: boolean
    toggle: () => void
    eraseAll: () => void
}

const AuthContext = createContext({} as AuthContext);

export function useAuthLogin() {
    return useContext(AuthContext)
};

export function AuthContextProvider({ children }: Props) {

    const [switchLogin, setSwitchLogin] = useState<boolean>(true)
    const [email, setEmail] = useState<string>("")
    const [usrEmail, setUsrEmail] = useState<string>("")

    const toggle = () => {
        setSwitchLogin(!switchLogin)
        //setUsrEmail(email)
    }

    const eraseAll = () => {
        setUsrEmail("")
    }

    console.log("my setEmail", setEmail)

    return (
        <AuthContext.Provider value={{
            usrEmail,
            setUsrEmail,
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
