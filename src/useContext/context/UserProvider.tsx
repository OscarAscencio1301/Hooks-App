import { UserContext } from "./UseContext"


interface PropsProvider {
    children: JSX.Element | JSX.Element[]
}

const UserProvider = ({ children }: PropsProvider) => {
    return (
        <UserContext.Provider value={{
            hola: 'Mundo',
            user: {
                email: 'oscarægmail.com',
                id: 24332443,
                usename: 'Oscar'
            }
        }}>
            {children}
        </UserContext.Provider>


    )
}

export default UserProvider
