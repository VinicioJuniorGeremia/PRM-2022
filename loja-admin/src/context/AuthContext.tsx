import { createContext, ReactNode } from "react";
import { ICredential, IUser } from '@typesCustom';
import { useState } from "react";
import { signInAdmin } from "../services/server";

type AuthContextType = {
    user: IUser | undefined;
    signIn(Credential: ICredential): void;
}

export const AuthContext = createContext<AuthContextType>({} as 
    AuthContextType);

type AuthContextProviderProp = {
    children: ReactNode;
}
export function AuthContextProviderProp() {
    const [user, setUser] = useState<IUser>();
    
    async function signIn(credential: ICredential) {
        try {
            
            const result = await signInAdmin(credential) as any;

            if (result) {
                setUser(result.user);
            }

        } catch (error) {
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{user, signIn}}>
            {props.children}
        </AuthContext.Provider>
    ) 
    
}