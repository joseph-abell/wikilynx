import React, { Component, PropTypes } from 'react';

class BackButton extends Component {
	render () {
		let { onBackClick, title, breadcrumbs } = this.props;

		return (
			<button style={{border: 0, margin: 0, padding: 0, background: 'transparent'}} onClick={() => {
				onBackClick(title, breadcrumbs);
			}}>
				<span className="glyphicon glyphicon-chevron-left" />
			</button>
		);
	}
}

BackButton.propTypes = {
	title: PropTypes.string.isRequired,
	breadcrumbs: PropTypes.array.isRequired,
	onBackClick: PropTypes.func.isRequired
};

export default BackButton;