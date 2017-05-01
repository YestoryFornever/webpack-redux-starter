import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
	renderFilter(filter, name) {
		if (filter === this.props.filter) {
			return name
		}

		return (
			<a href='#' onClick={e => {
				e.preventDefault()
				this.props.onFilterChange(filter)
			}}>
				{name}
			</a>
		)
	}

	render() {
		return (
			<p>
				展示:
				{' '}
				{this.renderFilter('SHOW_ALL', '全部')}
				{', '}
				{this.renderFilter('SHOW_COMPLETED', '已完成')}
				{', '}
				{this.renderFilter('SHOW_ACTIVE', '待完成')}
				.
			</p>
		)
	}
}