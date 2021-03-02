import React, { Component } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodosSection from "./Components/TodosSection";
const initialTodos = [
	{
		message: "Go buy butterbeer",
		status: "complete",
		id: 0,
	},
	{
		message: "Win a quidditch game",
		status: "incomplete",
		id: 1,
	},
	{
		message: "Practice Wizard Skills",
		status: "incomplete",
		id: 2,
	},
];

class App extends Component {
	state = {
		todos: initialTodos,
	};

	createTodo = (message, status) => {
		const newTodo = {
			message: message,
			status: status,
		};

		this.setState({
			todos: [...this.state.todos, { ...newTodo, id: this.state.todos.length }],
		});
	};

	setStatus = (todoToChange, newStatus) => {
		const todos = JSON.parse(JSON.stringify(this.state.todos));
		const myTodoIndex = todos.findIndex((todo) => todo.id === todoToChange.id);
		let newTodo = JSON.parse(JSON.stringify(todos[myTodoIndex]));
		newTodo.status = newStatus;
		const newTodos = [
			...todos.slice(0, myTodoIndex),
			newTodo,
			...todos.slice(myTodoIndex + 1, todos.length),
		];
		console.log(newTodos);
		console.log(myTodoIndex);

		this.setState({ todos: newTodos });
	};

	render() {
		return (
			<div className="App">
				<h1>Harry Potter TDL</h1>
				<TodoForm createTodo={this.createTodo} />
				<TodosSection todos={this.state.todos} setStatus={this.setStatus} />
			</div>
		);
	}
}

export default App;
