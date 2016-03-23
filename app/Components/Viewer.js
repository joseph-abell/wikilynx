import React, { PropTypes, Component } from 'react';

class Viewer extends Component {
	render () {
		let { title, content, completeGame, viewerLoading } = this.props;

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
				{title && !completeGame && !viewerLoading && <div>
					<h2 style={{marginTop: 0}}>View Article</h2>
					<div style={style}>
						<h3 style={{marginTop: 0}}>{title}</h3>
						<div dangerouslySetInnerHTML={rawHtml()} />
					</div>
				</div> }

				{ title && !completeGame && viewerLoading && <div>
					<h2 style={{marginTop: 0}}>View Article</h2>
					<div style={style}>
						Loading...
					</div>
				</div>}
			</div>
		);
	}
}

Viewer.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	completeGame: PropTypes.bool.isRequired,
	viewerLoading: PropTypes.bool.isRequired
};

export default Viewer;