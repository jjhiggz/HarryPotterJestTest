import React from "react";
import TodoCard from "../TodoCard";

function TodosSection({ todos, setStatus }) {
	return (
		<section id="todos-section">
			{todos.map((todo, i) => {
				return <TodoCard key={i} todo={todo} setStatus={setStatus} />;
			})}
		</section>
	);
}

export default TodosSection;
