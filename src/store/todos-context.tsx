//dependencies
import React, { useState } from 'react';
//data model
import Todo from '../models/todo';

//type alias
type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
	children?: React.ReactNode;
};
type Props = {
	children?: any;
};

//creating todos context
export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

//creating todos context provider
const TodosContextProvider: React.FC<Props> = (props) => {
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

	const contextValue: TodosContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
