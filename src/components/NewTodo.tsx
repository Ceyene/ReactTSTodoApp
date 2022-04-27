import React, { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null); //useRef as a generic, it needs a type to be applied in the input, it also needs a default value (even null)

	//we need to specify the type of the event -> form, mouse, etc
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value; //--> ? it says that it's optional (for ts, not in execution, it will always be there but ts doesn't know it)
		// --> ! use it if you are 100% sure that the value won't be null when executing this line of code
		//checking if entered value is empty and throwing an error
		if (enteredText.trim().length === 0) {
			throw new Error("Value can't be emtpy");
			return;
		}

		//getting a function prop
		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
