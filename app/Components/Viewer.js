import React, { PropTypes, Component } from 'react';

class Viewer extends Component {
	render () {
		let { title, content, completeGame, viewerLoading } = this.props;

		function rawHtml() {
			return { __html: content};
		}

		const style = {
			height: 400,
			overflowY: 'none',
			backgroundColor: '#eee',
			borderRadius: 6,
			padding: 30
		};
		return (
			<div className="col-md-6">
				{title && !completeGame && !viewerLoading && <div style={style}>
					<h3 style={{marginTop: 0, paddingBottom: 10, borderBottom: '1px solid #ddd'}}>Preview</h3>
					<div style={{overflowY: 'auto', height: 300}}>
						<h4 style={{marginTop: 0}}>{title}</h4>
						<div dangerouslySetInnerHTML={rawHtml()} />
					</div>
				</div> }

				{ title && !completeGame && viewerLoading && <div>
					<h3 style={{marginTop: 0}}>Preview</h3>
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