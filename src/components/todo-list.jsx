import React, { Component, PropTypes } from 'react'
import Todo from './todo'

export default class TodoList extends Component {
	render() {
		return (
			<ul>
				<Todo/>
			</ul>
		)
	}
}