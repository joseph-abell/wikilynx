import React, { PropTypes, Component } from 'react';
import ViewButton from '../Containers/ViewButton';
import BackButton from '../Containers/BackButton';

class Breadcrumbs extends Component {
	render () {
		let { breadcrumbs, completeGame, firstPage, lastPage, onRandomGameClick, onRetryGameClick, newGame } = this.props;

		const style = {
			overflowY: 'auto',
			backgroundColor: '#eee',
			borderRadius: 6,
			padding: 30,
			marginTop: 30
		};

		return (
			<div className='col-md-12'>
				{ breadcrumbs[0] && <div className="row" style={style}>
					<div style={{paddingBottom: 10, borderBottom: '1px solid #ddd', marginBottom: 20}}>
						<h3 style={{marginTop: 0, float: 'left'}}>Your Moves</h3>
						
						{!newGame && <button className="btn btn-default" style={{float: 'right', display: 'block', marginTop: -6, marginLeft: 10 }} onClick={() => {
							onRetryGameClick(firstPage, lastPage);	
						}}>Retry</button> }
						{!newGame && <button className="btn btn-primary" style={{float: 'right', display: 'block', marginTop: -6}} onClick={() => {
							onRandomGameClick();	
						}}>New Game</button> }
						<div style={{clear: 'both'}} />
					</div>
					<div>
						{
							breadcrumbs.map(function (breadcrumb, index) {
								return (
									<div style={{lineHeight: '30px', height: 30, display: 'inline-block'}} key={index}>
										<span style={{float: 'left'}}>{breadcrumb.title}</span>
										{!completeGame && 
											<div style={{float: 'left', marginLeft: 5}}>
												<ViewButton title={breadcrumb.title} small={true} />
											</div>
										}
										{!completeGame && index != (breadcrumbs.length - 1) && 
											<div style={{float: 'left', marginLeft: 5, marginRight: 20}}>
												<BackButton title={breadcrumb.title} />
											</div>
										}
										<span style={{float: 'left', width: 10}} />
									</div>
								);
							})
						}
						<div style={{clear: 'both'}} />
					</div>
				</div> }
			</div>
		);
	}
};

Breadcrumbs.propTypes = {
	breadcrumbs: PropTypes.array.isRequired,
	completeGame: PropTypes.bool.isRequired,
	onRandomGameClick: PropTypes.func.isRequired,
	onRetryGameClick: PropTypes.func.isRequired,
	firstPage: PropTypes.string.isRequired,
	lastPage: PropTypes.string.isRequired,
	newGame: PropTypes.bool.isRequired
};

export default Breadcrumbs;