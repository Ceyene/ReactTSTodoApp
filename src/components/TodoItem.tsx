//dependencies
import React from 'react';

//if we don't put a type, its implicitly of type any
const TodoItem: React.FC<{ text: string }> = (props) => {
	return <li>{props.text}</li>;
};

export default TodoItem;
