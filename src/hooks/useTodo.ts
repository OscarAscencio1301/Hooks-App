import { useEffect, useReducer } from "react"
import { Todo, todoReducer } from "../useReducer/todoReducer"

const initialState: Todo[] = []

const init = () => {
    const data = localStorage.getItem('todos')
    return data ? JSON.parse(data) : []
}


const useTodo = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state])



    const addTodo = (newTodo: Todo) => {
        dispatch({
            type: 'agregar',
            payload: newTodo
        })
    }

    const deleteTodo = (id: string | number) => {
        dispatch({
            type: 'borrar',
            payload: {id}
        })
    }

    const checkDone = (todo: Todo) => {
        dispatch({
            type: 'change',
            payload: todo
        })
    }

  return {
    state,
    addTodo,
    deleteTodo,
    checkDone
  }
}

export default useTodo
