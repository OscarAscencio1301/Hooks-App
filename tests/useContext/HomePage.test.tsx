import { render, screen } from "@testing-library/react"
import HomePage from "../../src/useContext/HomePage"
import { UserContext } from "../../src/useContext/context/UseContext"

describe('Pruebas en HomePage', () => {
    test('Mostra el componente sin el usuario ', () => {
        render(
        <UserContext.Provider value={{
            hola: '',
            user: {
                usename: 'Juan',
                email: 'juanqgmail.com',
                id: 1254
            }
        }}>
            <HomePage />
        </UserContext.Provider>
        )
        expect(screen.getByText('Juan'))
    })

})
