import React, { PropTypes, Component } from 'react';
import Breadcrumbs from '../Containers/Breadcrumbs';

class CompletedGame extends Component {
	render () {
		let { completeGame, firstPage, lastPage, breadcrumbs } = this.props;
		return (
			<div className="row">
				<div className="col-md-12">
					{ completeGame && <div>
						<h1>Congratulations!</h1>
						{(breadcrumbs.length - 1) === 1 && <p>You got from {firstPage} to {lastPage} in {breadcrumbs.length - 1} link.</p>}
						{(breadcrumbs.length - 1) > 1 && <p>You got from {firstPage} to {lastPage} in {breadcrumbs.length - 1} links.</p>}
					</div> }
				</div>
			</div>
		);
	}
}

CompletedGame.propTypes = {
	completeGame: PropTypes.bool.isRequired,
	firstPage: PropTypes.string.isRequired,
	lastPage: PropTypes.string.isRequired,
	breadcrumbs: PropTypes.array.isRequired
};

export default CompletedGame;