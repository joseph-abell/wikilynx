import React, { PropTypes, Component } from 'react';

class GameBoard extends Component {
	render () {
		let { firstTitle, lastTitle, links } = this.props;

		return (
			<div>
				{firstTitle && <h2><small>From</small> {firstTitle} <small>to</small> {lastTitle}</h2> }
				{firstTitle && <div>
					{links}
				</div> }
			</div>
		);
	}
};

GameBoard.propTypes = {
	firstTitle: PropTypes.string.isRequired,
	lastTitle: PropTypes.string.isRequired,
	links: PropTypes.array.isRequired
};

export default GameBoard;