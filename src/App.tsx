//dependencies
import { useState } from 'react';
//data model
import Todo from './models/todo';
//components
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

function App() {
	const [todos, setTodos] = useState<Todo[]>([]); //you need to specify type and a default value

	//form handlers
	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};
	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} onRemoveTodo={removeTodoHandler} />
		</div>
	);
}

export default App;
