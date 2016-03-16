import React, { PropTypes, Component } from 'react';

class Breadcrumbs extends Component {
	render () {
		let { breadcrumbs } = this.props;

		return (
			<div className="col-md-12" style={{marginBottom: 20}}>
				<h2>Breadcrumbs</h2>
				{
					breadcrumbs.map(function (breadcrumb, index) {
						return (
							<div key={index}>{breadcrumb.title}</div>
						);
					})
				}
			</div>
		);
	}
};

Breadcrumbs.propTypes = {
	breadcrumbs: PropTypes.array.isRequired
};

export default Breadcrumbs;