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
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={styles.todos}>
            {props.items.map((item) => (
                // can set key even if its not expected in the TodoItem component.
                // *since React.FC type was defined, key, children, etc. special props can be assecced because of this
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>   
    );
};

export default Todos;