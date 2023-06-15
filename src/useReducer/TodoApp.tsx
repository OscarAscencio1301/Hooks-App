import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"
import useTodo from "../hooks/useTodo"




const TodoApp = () => {

    const { state, deleteTodo, checkDone, addTodo } = useTodo()


    return (
        <>
            <h1>Todo App {state.length}</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <h4>Todo List</h4>
                    <hr />
                    <TodoList todos={state} deleteT={deleteTodo} checkDone={checkDone} />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd addTodo={addTodo} />
                </div>
            </div>


        </>
    )
}

export default TodoApp
