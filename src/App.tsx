//dependencies
import { useState } from 'react';
//data model
import Todo from './models/todo';
//components
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

function App() {
	const [todos, setTodos] = useState<Todo[]>([]); //you need to specify type and a default value

	//form handler
	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} />
		</div>
	);
}

export default App;
