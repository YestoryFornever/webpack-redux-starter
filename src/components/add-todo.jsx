import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

export default class AddTodo extends Component {
	render() {
		return (
			<div>
				<form>
					<input/>
					<button type="submit">添加待办项</button>
				</form>
			</div>
		)
	}
}