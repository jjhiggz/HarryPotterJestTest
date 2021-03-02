import React from "react";
function TodoCard({ todo, setStatus }) {
	return (
		<div key={todo.id} className={`${todo.status} todo-card`}>
			<p>{todo.message}</p>
			<button
				onClick={() => {
					setStatus(todo, "incomplete");
				}}
			>
				Incomplete
			</button>
			<button
				onClick={() => {
					setStatus(todo, "in-progress");
				}}
			>
				In progress
			</button>
			<button
				onClick={() => {
					setStatus(todo, "complete");
				}}
			>
				complete
			</button>
		</div>
	);
}

export default TodoCard;
