import React, { PropTypes, Component } from 'react';
import ViewButton from '../Containers/ViewButton';

class Header extends Component {
	render () {
		let { onRandomGameClick, firstTitle, lastTitle, isCompleted } = this.props;

		return (
			<div className="page-header">
				{lastTitle && <div>
					<h1>
						<span style={{display: 'inline-block', marginRight: 30}}>Wikilynx</span>
					</h1>
					<h2 style={{float: 'left', marginTop: 0}}><small>Get from <span style={{color: '#000'}}>{firstTitle}</span> {!isCompleted && <ViewButton title={firstTitle} /> } to <span style={{color: '#000'}}>{lastTitle}</span> {!isCompleted && <ViewButton title={lastTitle} />} in the fewest clicks.</small></h2>
					<button className="btn" style={{float: 'right', display: 'block', marginTop: 0, backgroundColor: '#CBE86B', color: '#fff'}} onClick={() => {
						onRandomGameClick()	
					}}>
						<h2 style={{margin: 0}}>Random Game</h2>
					</button>
					<div style={{clear: 'both'}}></div>
				</div>}
				{!lastTitle && <div>
					<h1>
						<span style={{display: 'inline-block', marginRight: 30}}>Wikilynx</span>
					</h1>
					<h2 style={{float: 'left', margin: 0}}><small>Get from one wikipedia page to another in the fewest clicks.</small></h2>
					<button className="btn" style={{float: 'right', display: 'block', marginTop: 0, backgroundColor: '#CBE86B', color: '#fff'}} onClick={() => {
						onRandomGameClick()	
					}}>
						<h2 style={{margin: 0}}>Random Game</h2>
					</button>
					<div style={{clear: 'both'}}></div>
				</div>}
				
				
			</div>
		);
	}
};

Header.propTypes = {
	onRandomGameClick: PropTypes.func.isRequired,
	firstTitle: PropTypes.string.isRequired,
	lastTitle: PropTypes.string.isRequired,
	isCompleted: PropTypes.bool.isRequired
}

export default Header;