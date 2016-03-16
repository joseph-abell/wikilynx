import React, { PropTypes, Component } from 'react';
import Link from './Link';

class Titles extends Component {
	render () {
		let { firstTitle, lastTitle } = this.props;
		return (
			<h2>
				{firstTitle && <div> <small>From</small> {firstTitle} <small>to</small> {lastTitle}</div>}
			</h2>
		);
	}
};

Titles.propTypes = {
	firstTitle: PropTypes.string.isRequired,
	lastTitle: PropTypes.string.isRequired
};

export default Titles;