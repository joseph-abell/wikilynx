import React, { PropTypes, Component } from 'react';

class Overlay extends Component {
	render () {
		let { playerReady, onOverlayClick } = this.props;
		return (
			<div>
				{!playerReady && 
				<div className="jumbotron">
					<h2>Ready? Select Begin to choose 2 random pages.</h2>
					<button className="btn btn-primary" onClick={() => {
						onOverlayClick(playerReady)	
					}}>Begin</button>
				</div>
				}
			</div>
		);
	}
}

Overlay.propTypes = {
	playerReady: PropTypes.bool.isRequired,
	onOverlayClick: PropTypes.func.isRequired
};

export default Overlay;