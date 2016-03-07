import React, { PropTypes, Component } from 'react';

class Overlay extends Component {
	render () {
		let { playerReady, onOverlayClick } = this.props;
		const style = {
			overflowY: 'auto',
			backgroundColor: '#eee',
			borderRadius: 6,
			padding: '30px'
		};
		return (
			<div>
				{!playerReady && 
				<div style={style}>
					<h2 style={{marginTop: 0}}>Ready? Select Begin to choose 2 random pages.</h2>
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