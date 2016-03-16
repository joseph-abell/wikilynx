import React, { Component, PropTypes } from 'react';

class Link extends Component {
	render () {
		let { onViewClick, onLinkClick, title, lastPage, breadcrumbs } = this.props;

		return (
			<div style={{marginBottom: 10}}>
				<a style={{display: 'block'}}>{this.props.title}</a>
				<button className="btn btn-default" style={{marginRight:10}} onClick={()=>{
					onViewClick(title);
				}}>
					<span className="glyphicon glyphicon-eye-open"></span> View
				</button>
				<button className="btn btn-primary" style={{marginRight:10}} onClick={()=>{
					onLinkClick(title, lastPage, breadcrumbs);
				}}>
					<span className="glyphicon glyphicon-ok"></span> Set Link
				</button>
			</div>
		);
	}
}

Link.propTypes = {
	title: PropTypes.string.isRequired,
	lastPage: PropTypes.string.isRequired,
	breadcrumbs: PropTypes.array.isRequired,
	onViewClick: PropTypes.func.isRequired,
	onLinkClick: PropTypes.func.isRequired
};

export default Link;