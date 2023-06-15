import { FormEvent } from "react"
import useForm from "../hooks/useForm"
import { Todo } from "./todoReducer"


const TodoAdd = ({ addTodo }: { addTodo: (todo: Todo) => void }) => {

    const { todo, changeEvent, reset } = useForm({
        todo: ''
    })

    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault()
        if(todo.trim().length < 1) return
        addTodo({
            id: Date.now(),
            todo,
            done: false
        })

        reset()
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input type="text" className="form-control" name="todo" value={todo} onChange={changeEvent} />
            <button className="btn btn-primary mt-2" type="submit">Agregar</button>
        </form>
    )
}

export default TodoAdd
