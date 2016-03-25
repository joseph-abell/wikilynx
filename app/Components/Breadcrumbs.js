import React, { PropTypes, Component } from 'react';
import ViewButton from '../Containers/ViewButton';

class Breadcrumbs extends Component {
	render () {
		let { breadcrumbs, completeGame } = this.props;

		return (
			<div className='col-md-12'>
				{ breadcrumbs[0] && <div className="row" style={{marginBottom: 40}}>
					<h3>Your Moves</h3>
					<div>
						{
							breadcrumbs.map(function (breadcrumb, index) {
								return (
									<div style={{lineHeight: '30px', height: 30, float: 'left', paddingRight: 20}} key={index}>{breadcrumb.title}
										{' '}
										{!completeGame && index == (breadcrumbs.length - 1) && <div style={{float: 'right', marginLeft: 5, marginRight: 10}}>
											<ViewButton title={breadcrumb.title} />
										</div>}
									</div>
								);
							})
						}
					</div>
				</div> }
			</div>
		);
	}
};

Breadcrumbs.propTypes = {
	breadcrumbs: PropTypes.array.isRequired,
	completeGame: PropTypes.bool.isRequired
};

export default Breadcrumbs;