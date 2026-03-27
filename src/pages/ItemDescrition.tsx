import { use, useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useParams } from "next/navigation"
import { useNavigate } from "react-router-dom"

interface ComponentProps {
    todos: ToDo[]
}

export const ItemDescription = ({todos}: ComponentProps) => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    useEffect(() => {
        const searchTodo = todos.find((todo) => String(todo.id) === id)

        if(searchTodo){
            setTodo(searchTodo)
        } else {
            navigate("/404")
        }
    }, [id, todos, navigate])

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    )
}