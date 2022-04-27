//dependencies
import React from 'react';
//data model
import Todo from '../models/todo';
//components
import TodoItem from './TodoItem';
//assets
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<TodoItem key={item.id} text={item.text} />
			))}
		</ul>
	);
};

export default Todos;
