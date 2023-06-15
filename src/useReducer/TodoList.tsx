
import TodoItem from './TodoItem'
import { Todo } from './todoReducer'

interface PropsTodo {
    todos: Todo[],
    deleteT: (() => void) | ((id: string | number) => void),
    checkDone: (() => void) | ((todo: Todo) => void)
}

const TodoList = ({ todos, deleteT, checkDone}: PropsTodo) => {
    return (
        <ul className="list-group">
            {
                todos.map(li => <TodoItem key={li.id} todo={li} deleteT={deleteT} checkDone={checkDone}/>)
            }

        </ul>
    )
}

export default TodoList
