import React, { Component, PropTypes } from 'react';

class NewGame extends Component {
	render () {
		let { onRandomGameClick, onCustomGameClick, newGame, newGameLoading } = this.props;
		return (
			<div>
				{newGame && !newGameLoading && <div className="row">
					<div className="col-md-6">
						<h2 style={{marginTop: 0}}>Create a Game</h2>
						<div>
							<div className="form-group">
								<button className="btn btn-primary" onClick={() => {
									onRandomGameClick();
								}}>
									Random Game
								</button>{' '}
								{' '}<button className="btn btn-primary" onClick={() => {
									onCustomGameClick();
								}}>
									Custom Game
								</button>
							</div>
						</div>
					</div>
				</div> }

				{newGame && newGameLoading && <div className="row">
					<div className="col-md-12">
						<h1 syyle={{marginTop: 0}}>Fetching pages from Wikipedia...</h1>
					</div>
				</div> }
			</div>
		);
	}
}

NewGame.propTypes = {
	onRandomGameClick: PropTypes.func.isRequired,
	onCustomGameClick: PropTypes.func.isRequired,
	newGame: PropTypes.bool.isRequired,
	newGameLoading: PropTypes.bool.isRequired
}

export default NewGame;