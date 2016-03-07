import React, { Component, PropTypes } from 'react';

class LastPage extends Component {
	render () {
		let { name, content, onLastPageClick, playerReady } = this.props;
		function rawHtml() {
			return { __html: content};
		};
		return (
			<div>
				{ playerReady && <div>
					<h3>
						To:{' '}{name}
						<span onClick={onLastPageClick}>- Random Page</span>
					</h3>
					<div dangerouslySetInnerHTML={rawHtml()} />
				</div> }
			</div>
		);
	}
	
};

LastPage.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	onLastPageClick: PropTypes.func.isRequired,
	playerReady: PropTypes.bool.isRequired
};

export default LastPage;