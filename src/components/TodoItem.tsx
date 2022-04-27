//dependencies
import React from 'react';
//assets
import classes from './TodoItem.module.css';

//if we don't put a type, its implicitly of type any
const TodoItem: React.FC<{ text: string }> = (props) => {
	return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
