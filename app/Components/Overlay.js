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
					<button className="btn" style={{backgroundColor: '#CBE86B', color: '#fff'}} onClick={() => {
						onOverlayClick(playerReady)	
					}}><h2 style={{margin: 0}}>Random Game</h2></button>
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