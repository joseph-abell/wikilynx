import React, { PropTypes, Component } from 'react';
import ViewButton from '../Containers/ViewButton';

class Breadcrumbs extends Component {
	render () {
		let { breadcrumbs, isCompleted } = this.props;

		const style = {
			height: 200,
			overflowY: 'auto',
			backgroundColor: '#eee',
			borderRadius: 6,
			padding: 30
		};

		return (
			<div className="col-md-12" style={{marginBottom: 20}}>
				{ breadcrumbs[0] && <div>
					<h2 style={{marginTop: 0}}>Completed Moves</h2>
					<div style={style}>
						{
							breadcrumbs.map(function (breadcrumb, index) {
								return (
									<div style={{marginBottom: 10, display: 'inline-block', paddingRight: 20}} key={index}>{breadcrumb.title} {!isCompleted && <div><ViewButton title={breadcrumb.title} /></div>}</div>
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
	isCompleted: PropTypes.bool.isRequired
};

export default Breadcrumbs;