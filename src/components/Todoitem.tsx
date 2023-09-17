import Todo from "../models/Todo";

import styles from './TodoItem.module.css';

// *Acts as a functional component, so children, key, other special props can be accessed automatically
const TodoItem: React.FC<{ text: string }> = (props) => {
    return <li className={styles.item}>{props.text}</li>
}

export default TodoItem;