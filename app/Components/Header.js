import React, { PropTypes, Component } from 'react';
import ViewButton from '../Containers/ViewButton';

class Header extends Component {
	render () {
		let { onRandomGameClick, onRetryGameClick, firstTitle, lastTitle, completeGame, newGame } = this.props;

		return (
			<div className="page-header">
				{lastTitle && <div>
					{ newGame && <h1>
						<span style={{display: 'inline-block', marginRight: 30}}>Wikilynx</span>
					</h1> }
					<h2 style={{marginTop: 0}}>
						<span style={{color: '#000'}}>{firstTitle}</span>
						{' '}
						{!completeGame && <ViewButton title={firstTitle} /> }
						{' '}
						to
						{' '}
						<span style={{color: '#000'}}>{lastTitle}</span>
						{' '}
						{!completeGame && <ViewButton title={lastTitle} />}
						{!newGame && <button className="btn btn-default" style={{float: 'right', display: 'block', marginTop: 0, marginLeft: 10 }} onClick={() => {
							onRetryGameClick(firstTitle, lastTitle);	
						}}>Retry</button> }
						{!newGame && <button className="btn btn-primary" style={{float: 'right', display: 'block', marginTop: 0}} onClick={() => {
							onRandomGameClick();	
						}}>New Game</button> }
						
						<div style={{clear: 'both'}}></div>
					</h2>
					
					
				</div>}
				{!lastTitle && <div>
					<h1>
						<span style={{display: 'inline-block', marginRight: 30}}>Wikilynx</span>
					</h1>
					<h2 style={{float: 'left', margin: 0}}>
						<small>Get from one wikipedia page to another in the fewest clicks.</small>
					</h2>

					{!newGame && <button className="btn" style={{float: 'right', display: 'block', marginTop: 0, backgroundColor: '#CBE86B', color: '#fff'}} onClick={() => {
						onRandomGameClick()	
					}}>
						<h2 style={{margin: 0}}>New Game</h2>
					</button> }
					
					<div style={{clear: 'both'}}></div>
				</div>}
			</div>
		);
	}
};

Header.propTypes = {
	onRandomGameClick: PropTypes.func.isRequired,
	onRetryGameClick: PropTypes.func.isRequired,
	firstTitle: PropTypes.string.isRequired,
	lastTitle: PropTypes.string.isRequired,
	completeGame: PropTypes.bool.isRequired,
	newGame: PropTypes.bool.isRequired
}

export default Header;