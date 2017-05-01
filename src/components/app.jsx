import React, { Component, PropTypes } from 'react';
import AddTodo from './add-todo'
import TodoList from './todo-list'
import Footer from './footer'
let App = ()=>{
	return (
		<div>
			<AddTodo/>
			<TodoList/>
			<Footer/>
		</div>
	);
}
export default App;