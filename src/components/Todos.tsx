//dependencies
import React from 'react';
//data model
import Todo from '../models/todo';
//components
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<TodoItem key={item.id} text={item.text} />
			))}
		</ul>
	);
};

export default Todos;
