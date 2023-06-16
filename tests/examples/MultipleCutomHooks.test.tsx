import { fireEvent, render, screen } from "@testing-library/react";
import MultipleCutomHooks from "../../src/examples/MultipleCutomHooks";
import useFetch from "../../src/hooks/useFetch";
import useCounter from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')


describe('Pruebas a MutipleCustomHooks', () => {
    const changeFunction = jest.fn();

    (useCounter as jest.Mock).mockReturnValue({
        counter: 1,
        changeCounter: changeFunction
    });

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Debe de mostrar el componente por decfecto ', () => {
        (useFetch as jest.Mock).mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        render(<MultipleCutomHooks />)
        expect(screen.getByText('Rick and Morty'))
        expect(screen.getByText('Cargando...'))
    });

    test('Probar el useFetch', () => {
        (useFetch as jest.Mock).mockReturnValue({
            data: { name: 'Nuevo Nombre', episode: 'Episodio 33' },
            loading: false,
            error: null
        });


        render(<MultipleCutomHooks />)

        expect(screen.getByText('Nuevo Nombre'))
        expect(screen.getByText('Episodio 33'))

    })


    test('Probar la funcion de incrementar', () => {
       

        (useFetch as jest.Mock).mockReturnValue({
            data: { name: 'Nuevo Nombre', episode: 'Episodio 33' },
            loading: false,
            error: null
        });

        render(<MultipleCutomHooks />)

        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(changeFunction).toBeCalled()




    })

})