import React, { Component, PropTypes } from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import Footer from './footer';

const App = ({ visibleTodos,onAddClick })=>{
	return (
		<div>
			<AddTodo
				onAddClick={onAddClick} />
			<TodoList
				todos={visibleTodos} />
			<Footer/>
		</div>
	);
}
export default App;