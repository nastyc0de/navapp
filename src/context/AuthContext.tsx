import React, { useReducer } from 'react';
import { createContext } from "react";
import { AuthContextProps, AuthState } from '../Intefaces';
import authReducer from './authReducer';


const authInitialState: AuthState ={
    isLoggedIn:false,
    userName: undefined,
    favoriteIcon: undefined
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}:any)=>{
    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    const signIn = () => {
        dispatch({type:'SignIn'})
    }
    return(
        <AuthContext.Provider value={{
            authState,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}