import React, { Component, PropTypes } from 'react';

class ViewButton extends Component {
	render () {
		let { onViewClick, title } = this.props;

		return (
			<button className="btn btn-default" style={{marginRight:10}} onClick={()=>{
				onViewClick(title);
			}}>
				<span className="glyphicon glyphicon-eye-open"></span> Preview
			</button>
		);
	}
}

ViewButton.propTypes = {
	title: PropTypes.string.isRequired,
	onViewClick: PropTypes.func.isRequired
};

export default ViewButton;