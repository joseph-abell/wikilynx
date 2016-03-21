import React, { Component, PropTypes } from 'react';

class NewGame extends Component {
	render () {
		let { onRandomGameClick, onCustomGameClick, newGame, newGameLoading } = this.props;
		return (
			<div>
				{newGame && !newGameLoading && <div>
					<div className="col-md-6" style={{marginBottom: 20, marginTop: -40}}>
						<h2 style={{marginTop: 0}}>Create a Game</h2>
						<p>Add a wikipedia page title into the following inputs.</p>
						<div>
							<div className="form-group">
								<label forName="first-page">First Page</label>
								<input type="text" className="form-control" placeholder="First Page" id="first-page" ref={node => {
									this.firstPageInput = node;
								}} />
							</div>
							<div className="form-group">
								<label forName="first-page">Last Page</label>
								<input type="text" className="form-control" placeholder="Last Page" ref={node => {
									this.lastPageInput = node;
								}} />
							</div>
							<button className="btn btn-default" onClick={() => {
								onCustomGameClick(this.firstPageInput.value, this.lastPageInput.value);
							}}>
								Play Custom Game
							</button>
						</div>
					</div>
					<div className="col-md-6" style={{marginBottom: 20, marginTop: -40}}>
						<h2 style={{marginTop: 0}}>Play a Random Game</h2>
						<button className="btn btn-default" onClick={() => {
							onRandomGameClick();
						}}>
							Random Game
						</button>
					</div>
				</div> }

				{newGame && newGameLoading && <div className="col-md-12" style={{marginTop: -40}}>
					<h1>Fetching pages from Wikipedia...</h1>
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