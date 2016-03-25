import React, { PropTypes, Component } from 'react';
import Link from '../Containers/Link';
import Filter from '../Containers/Filter';

class GameBoard extends Component {
	render () {
		let { completeGame, links, gameBoardLoading, newGame, gameBoardFilter } = this.props;
		
		const style = {
			height: 400,
			overflowY: 'auto',
			backgroundColor: '#eee',
			borderRadius: 6,
			padding: 30
		};

		return (
			<div className="col-md-6">
				{ links[0] && !completeGame && !gameBoardLoading && !newGame && <div style={{marginBottom: 20}}>
					<h2 style={{marginTop: 0, float:'left'}}>Available Moves</h2>
					<div style={{float: 'right', marginTop: 5}}><Filter /></div>
					<div style={{clear: 'both'}}></div>
					<div style={style}>
						<ul style={{margin: 0, padding: 0}}>
						{
							links.map(function (link, index) {
								const lowerCaseLink = link.title.toLowerCase();
								const lowerCaseFilter = gameBoardFilter.toLowerCase();
								return (
									<li style={{listStyle: 'none'}} key={index}>
										{lowerCaseLink.includes(lowerCaseFilter) && <div><Link title={link.title} /></div>}
									</li>
								);
							})
						}
						</ul>
					</div>
				</div> }
				{ links[0] && gameBoardLoading && !completeGame && !newGame && <div style={{marginBottom: 20}}>
					<h2 style={{marginTop: 0}}>Available Moves</h2>
					<div style={style}>
						Loading...
					</div>
				</div>}
			</div>
		);
	}
};

GameBoard.propTypes = {
	links: PropTypes.array.isRequired,
	completeGame: PropTypes.bool.isRequired,
	gameBoardFilter: PropTypes.string.isRequired
};

export default GameBoard;