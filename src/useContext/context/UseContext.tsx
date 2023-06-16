import { createContext } from "react";

interface PropsContext {
    hola: string,
    user: {
        email: string,
        id: number,
        usename: string
    }
}


export const UserContext = createContext<PropsContext>({} as PropsContext)
