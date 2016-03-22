import React, { PropTypes, Component } from 'react';
import ViewButton from '../Containers/ViewButton';

class Breadcrumbs extends Component {
	render () {
		let { breadcrumbs, isCompleted } = this.props;

		const style = {
			overflowY: 'auto',
			backgroundColor: '#eee',
			borderRadius: 6,
			padding: 10
		};

		return (
			<div style={{marginBottom: 20}}>
				{ isCompleted && breadcrumbs[0] && <div>
					<div style={style}>
						{
							breadcrumbs.map(function (breadcrumb, index) {
								return (
									<div style={{lineHeight: '30px', height: 30, display: 'inline-block', paddingRight: 20}} key={index}>{breadcrumb.title}</div>
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