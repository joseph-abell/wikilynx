import React, { Component, PropTypes } from 'react';
import ViewButton from '../Containers/ViewButton';
import LinkButton from '../Containers/LinkButton';

class Link extends Component {
	render () {
		let { onLinkClick, title, lastPage, breadcrumbs, isCompleted } = this.props;

		return (
			<div style={{marginBottom: 10}}>
				{ !isCompleted && <div>
					<a style={{display: 'block'}}>{title}</a>
					<ViewButton title={title} />
					<LinkButton title={title} lastPage={lastPage} breadcrumbs={breadcrumbs} />
				</div> }
			</div>
		);
	}
}

Link.propTypes = {
	title: PropTypes.string.isRequired,
	lastPage: PropTypes.string.isRequired,
	breadcrumbs: PropTypes.array.isRequired,
	onLinkClick: PropTypes.func.isRequired,
	isCompleted: PropTypes.bool.isRequired
};

export default Link;