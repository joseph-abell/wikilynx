import React, { PropTypes, Component } from 'react';
import Breadcrumbs from '../Containers/Breadcrumbs';

class CompletedGame extends Component {
	render () {
		let { isCompleted, breadcrumbs, onRetryClick, onResetClick, firstTitle, lastTitle } = this.props;
		return (
			<div>
				{ isCompleted && <div>
					<h1>Congratulations</h1>
					<p>You completed the chain.</p>
					<Breadcrumbs />
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
	isCompleted: PropTypes.bool.isRequired,
	breadcrumbs: PropTypes.array.isRequired,
	onRetryClick: PropTypes.func.isRequired,
	onResetClick: PropTypes.func.isRequired,
	firstTitle: PropTypes.string.isRequired,
	lastTitle: PropTypes.string.isRequired
};

export default CompletedGame;