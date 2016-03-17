import React, { PropTypes, Component } from 'react';

class CompletedGameOverlay extends Component {
	render () {
		let { isCompleted, breadcrumbs, onRetryClick, onResetClick, firstTitle, lastTitle } = this.props;
		return (
			<div>
				{ isCompleted && <div>
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

CompletedGameOverlay.propTypes = {
	isCompleted: PropTypes.bool.isRequired,
	breadcrumbs: PropTypes.array.isRequired,
	onRetryClick: PropTypes.func.isRequired,
	onResetClick: PropTypes.func.isRequired,
	firstTitle: PropTypes.string.isRequired,
	lastTitle: PropTypes.string.isRequired
};

export default CompletedGameOverlay;