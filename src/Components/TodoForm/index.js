import React, { Component } from "react";

class TodoForm extends Component {
	state = {
		message: "",
		status: "",
	};

	render() {
		return (
			<div id="todo-form-container">
				<h3>Create a new Todo</h3>
				<form
					id="new-todo-form"
					onSubmit={(event) => {
						event.preventDefault();
						this.props.createTodo(this.state.message, "incomplete");
					}}
				>
					<label htmlFor="message">message: </label>
					<input
						type="text"
						name="message"
						placeholder="What's Next"
						onChange={(event) => {
							this.setState({ message: event.target.value });
						}}
					/>
				</form>
			</div>
		);
	}
}

export default TodoForm;
