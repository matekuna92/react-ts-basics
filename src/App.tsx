import { useState } from "react";

import Todos from './components/todos';
import './App.css';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  
  /* const TodoList = [
    new Todo('Learn Typescript'),
    new Todo('Play Football')
  ]; */

  const addTodoHandler = (todoText: string) => {
	const newTodo = new Todo(todoText);
  
	setTodoList(prevTodos => {
		return prevTodos.concat(newTodo);
	});
}

  return (
    <div className="App">
    <NewTodo onAddTodo={addTodoHandler} />
		<Todos items={todoList} />
    </div>
  );
}

export default App;
