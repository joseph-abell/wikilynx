import React, { Component, PropTypes } from 'react';

class LastPage extends Component {
	render () {
		let { name, content, playerReady } = this.props;
		function rawHtml() {
			return { __html: content};
		}

		const style = {
			height: 400,
			overflowY: 'auto',
			backgroundColor: '#eee',
			borderRadius: 6,
			padding: '30px'
		};

		return (
			<div>
				{ playerReady && <div>
					<h2>To: {name}</h2>
					<div style={style}>
						<div dangerouslySetInnerHTML={rawHtml()} />
					</div> 
				</div> }
			</div>
		);
	}
	
};

LastPage.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	playerReady: PropTypes.bool.isRequired
};

export default LastPage;