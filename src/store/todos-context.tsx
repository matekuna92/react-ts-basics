import React, { useState } from "react";
import Todo from "../models/Todo";

const TodosContext = React.createContext<{ items: Todo[]; addTodo: () => void; removeTodo: (id: string) => void }>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodoList((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodoList(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    };

    const contextValue = {
        items: todoList,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContext;