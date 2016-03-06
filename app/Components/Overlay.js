import React, { PropTypes, Component } from 'react';

class Overlay extends Component {
	render () {
		let { playerReady, onClick } = this.props;
		return (
			<div>
				<h1>Get from one wikipedia page to another in the fewest clicks.</h1>
				<h2>Ready? Select Begin to choose 2 random pages.</h2>
				<button onClick={onClick(playerReady)}>Begin</button>
				<h2>Or create your own game</h2>
				{playerReady}
			</div>
		);
	}
}

Overlay.propTypes = {
	playerReady: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Overlay;