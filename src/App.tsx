import Todos from './components/todos';
import './App.css';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';

function App() {
  const TodoList = [
    new Todo('Learn Typescript'),
    new Todo('Play Football')
  ];

  const addTodoHandler = (text: string) => {
	console.log(text);
  }

  return (
    <div className="App">
    <NewTodo onAddTodo={addTodoHandler} />
		<Todos items={TodoList} />
    </div>
  );
}

export default App;
