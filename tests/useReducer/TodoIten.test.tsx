import { fireEvent, render, screen } from "@testing-library/react"
import TodoItem from "../../src/useReducer/TodoItem"

describe('Test TodoItem', () => {
    const deleteT = jest.fn()
    const checkDone = jest.fn()

    const todo = {
        id: 1,
        todo: 'Nuevo',
        done: false
    }

    beforeEach(() => jest.clearAllMocks())

    test('Retornar valores Inciales ', () => {
        render(<TodoItem todo={todo} deleteT={deleteT} checkDone={checkDone} />)
        expect(screen.getByText(todo.todo))
        
        const li = screen.getByLabelText('list')
        expect(li.className).toContain('list-group-item')
    })


    test('Presionar botón de eliminar', () => {
        render(<TodoItem todo={todo} deleteT={deleteT} checkDone={checkDone} />)
        const buttonDelete = screen.getByRole('button', {name: 'Borrar'})
        fireEvent.click(buttonDelete)
        expect(deleteT).toBeCalledWith(1)
    })

    test('Presionar botón de eliminar', () => {
        render(<TodoItem todo={todo} deleteT={deleteT} checkDone={checkDone} />)
        const buttonChange =  screen.getByLabelText('list')
        fireEvent.click(buttonChange)
        expect(checkDone).toBeCalled()
    })


})