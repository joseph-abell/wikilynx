import React, { PropTypes, Component } from 'react';
import ViewButton from '../Containers/ViewButton';

class Breadcrumbs extends Component {
	render () {
		let { breadcrumbs, isCompleted } = this.props;

		return (
			<div className="col-md-12" style={{marginBottom: 20}}>
				{breadcrumbs[0] && <h2 style={{marginTop: 0}}>Breadcrumbs</h2>}
				{
					breadcrumbs.map(function (breadcrumb, index) {
						return (
							<div style={{marginBottom: 10}} key={index}>{breadcrumb.title} {!isCompleted && <div><ViewButton title={breadcrumb.title} /></div>}</div>
						);
					})
				}
			</div>
		);
	}
};

Breadcrumbs.propTypes = {
	breadcrumbs: PropTypes.array.isRequired,
	isCompleted: PropTypes.bool.isRequired
};

export default Breadcrumbs;