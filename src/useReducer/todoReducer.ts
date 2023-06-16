

export const todoReducer = (state: Todo[], action: TodosAction) => {

    switch (action.type) {

        case 'agregar':
            return [...state, action.payload]
        case 'borrar':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'change':
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo)
        case 'test':
            return state
        default:
            return state
    }



}



export interface Todo {
    id: string | number,
    todo: string,
    done: boolean
}


type TodosAction = {
    type: 'agregar',
    payload: Todo
}
    |

{
    type: 'borrar',
    payload: { id: string | number }
}
    |
{
    type: 'change',
    payload: Todo
}
    |
{
    type: 'test',
}