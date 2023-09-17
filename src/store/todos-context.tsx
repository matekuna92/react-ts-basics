import React, { useState } from "react";
import Todo from "../models/Todo";

// type alias
type TodosCtxFormat = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
};

//const TodosContext = React.createContext<{ items: Todo[]; addTodo: () => void; removeTodo: (id: string) => void }>({
export const TodosContext = React.createContext<TodosCtxFormat>({
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

    const contextValue: TodosCtxFormat = {
        items: todoList,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;