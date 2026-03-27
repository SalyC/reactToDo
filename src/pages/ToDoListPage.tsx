import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDoListItem } from "../components/ToDoList/ToDoListItem/ToDoListItem"
import { ToDo } from "../models/todo-item"
import { useState } from "react"

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])
    
    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((item) => item.id !== toDoItem.id)
        setTodos(newTodos)
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((item) => {
            if (item.id === toDoItem.id) {
                item.isDone = !item.isDone
            }
            return item
        })
        setTodos(newTodos)
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}