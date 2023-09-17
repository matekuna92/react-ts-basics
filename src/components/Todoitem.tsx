import Todo from "../models/Todo";

// *Acts as a functional component, so children, key, other special props can be accessed automatically
const TodoItem: React.FC<{ text: string }> = (props) => {
    return <li>{props.text}</li>
}

export default TodoItem;