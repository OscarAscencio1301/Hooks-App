import { act, renderHook } from '@testing-library/react'
import useForm from '../../src/hooks/useForm'

describe('Pruebas al useForm', () => {
    const initialForm = {
        name: 'Oscar',
        email: 'oscar@gmail.com'
    }

    test('Retorna la informacion por defecto ', () => {
        const { result} = renderHook(() => useForm(initialForm))
        expect(result.current.form).toEqual(initialForm)
    
    });

    test('Debe de cambiar el nombre del formulario', () => {
        const { result} = renderHook(() => useForm(initialForm))
        const {changeEvent} = result.current
        act(() => {
            changeEvent({ target: { name: 'name', value: 'Oscar Ethian' } } as React.ChangeEvent<HTMLInputElement>);
          });

        expect(result.current.name).toBe('Oscar Ethian')
    
    });

    test('Debe de cambiar el nombre del formulario', () => {
        const { result} = renderHook(() => useForm(initialForm))
        const {changeEvent, reset} = result.current
        act(() => {
            changeEvent({ target: { name: 'name', value: 'Oscar Ethian' } } as React.ChangeEvent<HTMLInputElement>);
            reset()
        });

        expect(result.current.name).toBe('Oscar')
    
    });
})