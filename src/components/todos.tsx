import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./Todoitem";

import styles from './Todos.module.css';

// children is always a special prop without knowing its type at all
// for every component we would have to always add children and the customs props as well
// convert function to Functional Component (FC),
// so children props will be included as default, because it will act as a standard React functional component
/*function Todos(props: { items: string[], children }) {
    return <ul>
        {props.}
    </ul>
};*/

// defining Todos as FC, and defining our own props in <>
// pass forward the removeTodoHandler function, so it's defined in the App.tsx just as addTodoHandler
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={styles.todos}>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
            ))}
        </ul>   
    );
};

export default Todos;