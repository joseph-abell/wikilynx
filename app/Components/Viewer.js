import React, { PropTypes, Component } from 'react';

class Viewer extends Component {
	render () {
		let { title, content, isCompleted } = this.props;

		function rawHtml() {
			return { __html: content};
		}

		const style = {
			height: 400,
			overflowY: 'auto',
			backgroundColor: '#eee',
			borderRadius: 6,
			padding: 30
		};

		return (
			<div className="col-md-6" style={{marginBottom: 20}}>
				{title && !isCompleted && <div style={style}>
					<h3 style={{marginTop: 0}}>{title}</h3>
					<div dangerouslySetInnerHTML={rawHtml()} />
				</div> }
			</div>
		);
	}
}

Viewer.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	isCompleted: PropTypes.bool.isRequired
};

export default Viewer;