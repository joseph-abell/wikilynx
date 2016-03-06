import React, { Component, PropTypes } from 'react';

class LastPage extends Component {
	render () {
		let { name, content, onLastPageClick} = this.props;
		function rawHtml() {
			return { __html: content};
		};
		return (
			<div>
				<h3>
					To:{' '}{name}
					<span onClick={onLastPageClick}>- Random Page</span>
				</h3>
				<div dangerouslySetInnerHTML={rawHtml()} />
			</div>
		);
	}
	
};

LastPage.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	onLastPageClick: PropTypes.func.isRequired
};

export default LastPage;