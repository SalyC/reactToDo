import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDoListItem } from "../components/ToDoList/ToDoListItem/ToDoListItem";

export const ToDoListPage = () => {
    return (
        <>
            <Header />
            <Form />
            <ToDoList />
        </>
    )
}