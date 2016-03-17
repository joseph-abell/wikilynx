import React, { Component, PropTypes } from 'react';
import ViewButton from '../Containers/ViewButton';

class Link extends Component {
	render () {
		let { onLinkClick, title, lastPage, breadcrumbs } = this.props;

		return (
			<div style={{marginBottom: 10}}>
				<a style={{display: 'block'}}>{title}</a>
				<ViewButton title={title} />
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
	onLinkClick: PropTypes.func.isRequired
};

export default Link;