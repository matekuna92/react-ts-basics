import React from "react";
import Todo from "../models/Todo";

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
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
};

export default Todos;