import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<p>
				展示:
				{' '}
				{'全部'}
				{', '}
				{'已完成'}
				{', '}
				{'待完成'}
				.
			</p>
		)
	}
}