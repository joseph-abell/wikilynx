import React, { Component, PropTypes } from 'react';

class LinkButton extends Component {
	render () {
		let { onLinkClick, title, lastPage, breadcrumbs } = this.props;
		return (
			<button className="btn btn-primary" style={{marginRight:10}} onClick={()=>{
				onLinkClick(title, lastPage, breadcrumbs);
			}}>
				<span className="glyphicon glyphicon-ok"></span> Select
			</button>
		);
	}
}

LinkButton.propTypes = {
	title: PropTypes.string.isRequired,
	onLinkClick: PropTypes.func.isRequired
};

export default LinkButton;