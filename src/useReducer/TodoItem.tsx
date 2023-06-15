import { Todo } from "./todoReducer"

interface PropsTodo {
    todo: Todo,
    deleteT: (() => void) | ((id: string | number) => void)
    checkDone: (() => void) | ((todo: Todo) => void)
}

const TodoItem = ({ todo, deleteT, checkDone }: PropsTodo) => {
    return (
        <li style={{ textDecoration: `${todo.done ? 'line-through' : 'none'}` }} className="d-flex justify-content-between align-items-center list-group-item" onClick={() => checkDone({ id: todo.id, todo: todo.todo, done: !todo.done })}>
            <span>{todo.todo}</span>
            <button className="btn btn-danger" onClick={() => deleteT(todo.id)}>Borrar</button>
        </li>
    )
}

export default TodoItem
