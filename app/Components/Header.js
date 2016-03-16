import React, { PropTypes, Component } from 'react';

class Header extends Component {
	render () {
		let { onRandomGameClick, firstTitle, lastTitle } = this.props;

		return (
			<div className="page-header">
				{lastTitle && <h1>
					<span style={{display: 'inline-block', marginRight: 30}}>Wikilynx</span>
					<small>Get from <span style={{color: '#000'}}>{firstTitle}</span> to <span style={{color: '#000'}}>{lastTitle}</span> in the fewest clicks.</small>
				</h1>}
				{!lastTitle && <h1 style={{float: 'left'}}>
					<span style={{display: 'inline-block', marginRight: 30}}>Wikilynx</span>
					<small>Get from one wikipedia page to another in the fewest clicks.</small>
				</h1>}
				<button className="btn" style={{float: 'right', display: 'block', marginTop: 17, backgroundColor: '#CBE86B', color: '#fff'}} onClick={() => {
					onRandomGameClick()	
				}}>
					<h2 style={{margin: 0}}>Random Game</h2>
				</button>
				<div style={{clear: 'both'}}></div>
			</div>
		);
	}
};

Header.propTypes = {
	onRandomGameClick: PropTypes.func.isRequired,
	firstTitle: PropTypes.string.isRequired,
	lastTitle: PropTypes.string.isRequired
}

export default Header;