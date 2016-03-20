import React, { Component, PropTypes } from 'react';

class NewGame extends Component {
	render () {
		let { onRandomGameClick, onCustomGameClick, newGame } = this.props;
		return (
			<div>
				{newGame && <div>
					<div className="col-md-6" style={{marginBottom: 20}}>
						<h1>Create a Game</h1>
						<p>Add a wikipedia page title into the following inputs. If you leave any input blank, a random entry will be added.</p>
						<div>
							<div className="form-group">
								<label forName="first-page">First Page</label>
								<input type="text" className="form-control" placeholder="First Page" id="first-page" ref={node => {
									this.firstPageInput = node;
								}} />
							</div>
							<div className="form-group">
								<label forName="first-page">First Page</label>
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
					<div className="col-md-6" style={{marginBottom: 20}}>
						<h1>Play a Random Game</h1>
						<button className="btn btn-default" onClick={() => {
							onRandomGameClick();
						}}>
							Random Game
						</button>
					</div>
				</div> }
			</div>
		);
	}
}

NewGame.propTypes = {
	onRandomGameClick: PropTypes.func.isRequired,
	onCustomGameClick: PropTypes.func.isRequired,
	newGame: PropTypes.bool.isRequired
}

export default NewGame;