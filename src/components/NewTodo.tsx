//dependencies
import React, { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
//assets
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext); //using context

	const todoTextInputRef = useRef<HTMLInputElement>(null); //useRef as a generic, it needs a type to be applied in the input, it also needs a default value (even null)

	//we need to specify the type of the event -> form, mouse, etc
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value; //--> ? it says that it's optional (for ts, not in execution, it will always be there but ts doesn't know it)
		// --> ! use it if you are 100% sure that the value won't be null when executing this line of code
		//checking if entered value is empty and throwing an error
		if (enteredText.trim().length === 0) {
			alert("Value can't be emtpy");
			return;
		}

		//getting a function prop
		todosCtx.addTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="text">
				Use me as a reminder of pending tasks in your day...
			</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add Task</button>
			<p>(You can remove a task by clicking on it)</p>
		</form>
	);
};

export default NewTodo;
