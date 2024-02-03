import React, {createContext, useState} from "react";
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)

    async function signUp(nome, email, password){
        alert('Cadastrar usuário Nome:' + nome);
        
    }

    async function signIn(email, password){

        alert('Bem vindo: '+email)
        setUser(email)

    }

    return(
        <AuthContext.Provider value={{signed: !!user ,user, signUp, signIn, loadingAuth}} 
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;