import { todoReducer } from '../../src/useReducer/todoReducer'

describe('Pruebas en todo reducer', () => {
    const intialState = [{
        id: 1,
        todo: 'Hace la tarea',
        done: false
    }]


    test('Debe de retornar el estado inicial', () => {
        const newSate = todoReducer(intialState, { type: 'test' })
        expect(newSate).toEqual(intialState)
    });

    test('Prueba al agregar un todo', () => {
        const newSate = todoReducer(intialState, { type: 'agregar', payload: { id: 90, todo: 'Nuevo Todo', done: false } })
        expect(newSate.length).toBe(2)
    });
    test('Prueba al eliminar un todo', () => {
        const newSate = todoReducer(intialState, { type: 'borrar', payload: { id: 1 } })
        expect(newSate.length).toBe(0)
    });
    test('Prueba al hacer change un todo', () => {
        const newSate = todoReducer(intialState, { type: 'change', payload: intialState[0] })
        expect(newSate[0]).toEqual({
            id: 1,
            todo: 'Hace la tarea',
            done: false
        })
    });
})