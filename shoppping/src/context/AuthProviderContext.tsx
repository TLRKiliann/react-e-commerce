import React, {createContext, useState} from "react"

//property into children
type ShoppingCartProviderProps = {
    children: ReactNode
}

const AuthContext = createContext({} as AuthContext)

export function useShoppingCart() {
    return useContext(AuthContext)
};

export const AuthProvider = ({children}) => {
	const [auth, setAuth] = useState("Hello everybody :(=")

	return (
		<AuthContext.Provider value={{auth, setAuth}}>
			{children}

		</AuthContext.Provider>
	);
};