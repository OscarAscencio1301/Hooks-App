import { render, screen } from "@testing-library/react"
import TodoApp from "../../src/useReducer/TodoApp"
import useTodo from "../../src/hooks/useTodo"

jest.mock("../../src/hooks/useTodo")

describe('Pruebas al TodoApp.tsx', () => {

    (useTodo as jest.Mock).mockReturnValue({
        state: [],
        addTodo: jest.fn(),
        deleteTodo: jest.fn(),
        checkDone: jest.fn()
    })

    test('Valores iniciales ', () => {
        render(<TodoApp />)
        expect(screen.getByText('Todo List')).toBeTruthy()
    })

})