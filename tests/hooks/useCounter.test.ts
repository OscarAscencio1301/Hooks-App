import { renderHook, act } from '@testing-library/react'
import useCounter from '../../src/hooks/useCounter'

describe('Testing to useCounter', () => {
    test('Debe de ternoar los valores por defecto ', () => {
        const { result } = renderHook(() => useCounter(10))

        expect(result.current.counter).toBe(10)
    })

    test('Debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(10))
        const { changeCounter } = result.current
        act(() => {
            changeCounter(+1)
            changeCounter(+4)
        })

        expect(result.current.counter).toBe(15)
    })

    test('Debe de reinciar el contador', () => {
        const { result } = renderHook(() => useCounter(10))
        const { reset } = result.current
        act(() => {
           reset()
        })

        expect(result.current.counter).toBe(10)
    })

})