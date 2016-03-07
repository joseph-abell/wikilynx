import React, { PropTypes, Component } from 'react';

class Page extends Component {
	render () {
		let { name, content, onClick, playerReady} = this.props;
		function rawHtml() {
			return { __html: content};
		};
		return (
			<div>
				{ playerReady && <div>
					<h3>
						Get From:{' '}{name}
						<span onClick={onClick}>- Random Page</span>
					</h3>
					<div dangerouslySetInnerHTML={rawHtml()} /> 
				</div> }
			</div>
		);
	}
}

Page.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	playerReady: PropTypes.bool.isRequired
};

export default Page;