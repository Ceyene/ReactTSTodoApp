//dependencies
import React from 'react';
//data model
import Todo from '../models/todo';
//components
import TodoItem from './TodoItem';
//assets
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
	props
) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
