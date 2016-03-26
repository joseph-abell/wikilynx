import React, { Component, PropTypes } from 'react';

class ViewButton extends Component {
	render () {
		let { onViewClick, title, small } = this.props;

		return (
			<span>
				{ small == false && 
					<button className="btn btn-default" style={{marginRight:10}} onClick={()=>{
						onViewClick(title);
					}}>
						<span className="glyphicon glyphicon-eye-open"></span> Preview
					</button> 
				}

				{small == true && 
					<button style={{border: 0, margin: 0, padding: 0, background: 'transparent'}} onClick={()=>{
						onViewClick(title);
					}}>
						<span className="glyphicon glyphicon-eye-open"></span>
					</button> 
				}
			</span>
		);
	}
}

ViewButton.propTypes = {
	title: PropTypes.string.isRequired,
	small: PropTypes.bool.isRequired,
	onViewClick: PropTypes.func.isRequired
};

export default ViewButton;