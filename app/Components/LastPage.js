import React, { Component, PropTypes } from 'react';

class LastPage extends Component {
	render () {
		let { name, content, onLastPageClick, playerReady } = this.props;
		function rawHtml() {
			return { __html: content};
		}

		const style = {
			height: 400,
			overflowY: 'auto'
		};
		return (
			<div>
				{ playerReady && <div className="jumbotron" style={style}>
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