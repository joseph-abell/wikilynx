import React, { PropTypes, Component } from 'react';

class CustomGame extends Component {
	render () {
		let {
			customGame, 
			newGame, 
			newGameLoading, 
			onCustomGameClick
		} = this.props;

		return (
			<div>
				{ customGame && <div>
					{newGame && !newGameLoading && <div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label forName="first-page">First Page</label>
								<input type="text" className="form-control" placeholder="First Page" id="first-page" ref={node => {
									this.firstPageInput = node;
								}} onKeyPress={(event) => {
									if (event.key == 'Enter') {
										onCustomGameClick(this.firstPageInput.value, this.lastPageInput.value);
									}
								}}/>
							</div>
						</div>
					</div> }
					{newGame && !newGameLoading && <div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label forName="first-page">Last Page</label>
								<input type="text" className="form-control" placeholder="Last Page" id="last-page" ref={node => {
									this.lastPageInput = node;
								}} onKeyPress={(event) => {
									if (event.key == 'Enter') {
										onCustomGameClick(this.firstPageInput.value, this.lastPageInput.value);
									}
								}}/>
							</div>
						</div>
					</div> }
					{newGame && !newGameLoading && <div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<button className="btn btn-default" onClick={() => {
									onCustomGameClick(this.firstPageInput.value, this.lastPageInput.value);
								}}>
									Play Custom Game
								</button>
							</div>
						</div>
					</div> }
				</div>}
			</div>
		);
	}
}

CustomGame.propTypes = {
	customGame: PropTypes.bool.isRequired,
	newGame: PropTypes.bool.isRequired,
	newGameLoading: PropTypes.bool.isRequired,
	onCustomGameClick: PropTypes.func.isRequired
};

export default CustomGame;