import React, { Component, PropTypes } from 'react';
import ViewButton from '../Containers/ViewButton';
import LinkButton from '../Containers/LinkButton';

class Link extends Component {
	render () {
		let { onLinkClick, title, lastPage, breadcrumbs, completeGame } = this.props;

		return (
			<div style={{marginBottom: 10}}>
				{ !completeGame && <div>
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
	completeGame: PropTypes.bool.isRequired
};

export default Link;