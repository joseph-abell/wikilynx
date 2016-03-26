import React, { PropTypes, Component } from 'react';
import ViewButton from '../Containers/ViewButton';

class Header extends Component {
	render () {
		let { firstPage, lastPage, completeGame, newGame } = this.props;

		return (
			<div className="page-header">
				{lastPage && <div>
					{ newGame && <h1>
						<span style={{display: 'inline-block', marginRight: 30}}>Wikilynx</span>
					</h1> }
					<h2 style={{marginTop: 0}}>
						<span style={{color: '#000'}}>{firstPage}</span>
						{' '}
						{!completeGame && <ViewButton title={firstPage} /> }
						{' '}
						to
						{' '}
						<span style={{color: '#000'}}>{lastPage}</span>
						{' '}
						{!completeGame && <ViewButton title={lastPage} />}
						<div style={{clear: 'both'}}></div>
					</h2>
					
					
				</div>}
				{!lastPage && <div>
					<h1>
						<span style={{display: 'inline-block', marginRight: 30}}>Wikilynx</span>
					</h1>
					<h2 style={{float: 'left', margin: 0}}>
						<small>Get from one wikipedia page to another in the fewest clicks.</small>
					</h2>
					
					<div style={{clear: 'both'}}></div>
				</div>}
			</div>
		);
	}
};

Header.propTypes = {
	firstPage: PropTypes.string.isRequired,
	lastPage: PropTypes.string.isRequired,
	completeGame: PropTypes.bool.isRequired,
	newGame: PropTypes.bool.isRequired
}

export default Header;