//dependencies
import React, { useContext } from 'react';
//components
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
//assets
import classes from './Todos.module.css';

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext); //using context

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} //pre-configuring function to get the right id
				/>
			))}
		</ul>
	);
};

export default Todos;
