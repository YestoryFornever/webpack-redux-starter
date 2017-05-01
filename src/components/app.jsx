import React, { Component, PropTypes } from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import Footer from './footer';

const App = ({ visibleTodos, onAddClick, onTodoClick })=>{
	return (
		<div>
			<AddTodo
				onAddClick={onAddClick} />
			<TodoList
				todos={visibleTodos} onTodoClick={onTodoClick} />
			<Footer/>
		</div>
	);
}
export default App;