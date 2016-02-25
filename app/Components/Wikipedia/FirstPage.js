import React from 'react';

const FirstPage = ({firstPage}) => {
	function createMarkup () {
		return {__html: firstPage.content };
	}

	return (
		<div className="first-page" style={{height: 300, overflow: 'auto',border: '1px solid #e7e7e7', marginBottom: 20, padding: 20, background: '#f8f8f8'}}>
			<h2>{firstPage.title}</h2>
			<div dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
};

FirstPage.propTypes = {
	firstPage: React.PropTypes.object.isRequired
};

export default FirstPage;