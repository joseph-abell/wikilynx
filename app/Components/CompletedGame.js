import React, { PropTypes, Component } from 'react';
import Breadcrumbs from '../Containers/Breadcrumbs';

class CompletedGame extends Component {
	render () {
		let { completeGame, breadcrumbs, onRetryClick, onResetClick, firstTitle, lastTitle } = this.props;
		return (
			<div className="col-md-12">
				{ completeGame && <div>
					<h1>Congratulations</h1>
					<p>You completed the chain.</p>
					<p>
						<button className='btn btn-default' onClick={() => {
							onRetryClick(firstTitle, lastTitle);
						}}>Retry</button> 
						{' '}or{' '} 
						<button className='btn btn-default' onClick={() => {
							onResetClick();
						}}>Start Random Game</button>
					</p>
				</div> }
			</div>
		);
	}
}

CompletedGame.propTypes = {
	completeGame: PropTypes.bool.isRequired,
	breadcrumbs: PropTypes.array.isRequired,
	onRetryClick: PropTypes.func.isRequired,
	onResetClick: PropTypes.func.isRequired,
	firstTitle: PropTypes.string.isRequired,
	lastTitle: PropTypes.string.isRequired
};

export default CompletedGame;