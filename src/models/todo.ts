//type - interface - class
//it defines the constructor and the type that our data will have
class Todo {
	id: string;
	text: string;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = new Date().toISOString();
	}
}

export default Todo;
