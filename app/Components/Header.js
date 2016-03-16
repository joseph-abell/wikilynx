import React, { PropTypes, Component } from 'react';

class Header extends Component {
	render () {
		let { onRandomGameClick } = this.props;

		return (
			<div className="page-header">
				<h1 style={{float: 'left'}}>Wikilynx <small>Get from one wikipedia page to another in the fewest clicks.</small></h1>
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
	onRandomGameClick: PropTypes.func.isRequired
}

export default Header;