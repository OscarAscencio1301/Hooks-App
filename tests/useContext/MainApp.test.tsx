import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MainApp from "../../src/useContext/MainApp"
import { UserContext } from "../../src/useContext/context/UseContext"

describe('first', () => { 
    test('should ', () => {
      render(
        <MemoryRouter>
            <UserContext.Provider value={{
            hola: '',
            user: {
                usename: 'Juan',
                email: 'juanqgmail.com',
                id: 1254
            }
        }}>
            <MainApp />
            </UserContext.Provider>
        </MemoryRouter>
      )

      expect(screen.getByText('Home Page')).toBeTruthy()

      screen.debug()
    })

    test('Debe mostrar la pantalla del login ', () => {
        render(
          <MemoryRouter initialEntries={['/login']}>
              <UserContext.Provider value={{
              hola: '',
              user: {
                  usename: 'Juan',
                  email: 'juanqgmail.com',
                  id: 1254
              }
          }}>
              <MainApp />
              </UserContext.Provider>
          </MemoryRouter>
        )
  
        expect(screen.getByText('Login Page')).toBeTruthy()
  
        screen.debug()
      })
    
 })