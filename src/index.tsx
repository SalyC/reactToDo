import React from "react";
import ReactDOM from "react-dom/client";
import { ToDoListPage } from "./pages/ToDoListPage";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ToDo } from "./models/todo-item";
import { NotFound } from "./pages/404";
import { ItemDescription } from "./pages/ItemDescrition";
import path from "path";

const todos: ToDo[] = [
  {
    id: 0,
    text: "Learn React",
    isDone: false
  },
  {
    id: 1,
    text: "Learn Redux",
    isDone: true
  },
  {
    id: 2,
    text: "Learn TypeScript",
    isDone: false
  },
  {
    id: 3,
    text: "Learn React Router",
    isDone: true
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <HomePage todos={todos} />,
    children: [
      {
        path: "/",
        element: <ItemDescription todos={todos} />
      },
      {
      path: "/todo",
      element: <ToDoListPage />
      },
      {
      path: "/list/:id",
      element: <ItemDescription todos={todos} />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
