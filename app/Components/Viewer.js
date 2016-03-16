import React, { PropTypes, Component } from 'react';

class Viewer extends Component {
	render () {
		let { title, content} = this.props;

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
				<h2>You are Viewing: {title}</h2>
				<div style={style}>
					<div dangerouslySetInnerHTML={rawHtml()} />
				</div> 
			</div>
		);
	}
}

Viewer.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};

export default Viewer;