import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss';
import { ToDo } from "../../models/todo-item";

export const ToDoList = ( props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function } ) => {
    const ckeckedList = () => {
        return props.todos
                .filter((item) => !item.isDone)
                .map((item, idx) => {
                    return (
                        <ToDoListItem 
                        toDoItem = {item} 
                        key={idx} 
                        updateToDo={props.updateToDo} 
                        deleteToDo={props.deleteToDo} 
                        />
                    )
                })
    }

    const unCheckedList = () => {
        return props.todos
                .filter((item) => item.isDone)
                .map((item, idx) => {
                    return <ToDoListItem toDoItem = 
                    {item} key={idx} 
                    updateToDo={props.updateToDo} 
                    deleteToDo={props.deleteToDo} 
                    />
                })
    }

    const todo1: ToDo = {
        id: 0,
        text: 'Первая задача',
        isDone: false
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                { ckeckedList() }
            </ul>
            <ul className="todo-list completed">
                { unCheckedList() }
            </ul>
        </div>
    )
}