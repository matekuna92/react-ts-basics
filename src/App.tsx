import Todos from './components/todos';
import './App.css';
import Todo from './models/Todo';

function App() {
  const TodoList = [
    new Todo('Learn Typescript'),
    new Todo('Play Football')
  ];

  return (
    <div className="App">
		<Todos items={TodoList} />
    </div>
  );
}

export default App;
