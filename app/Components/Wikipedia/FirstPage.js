import React from 'react';

const FirstPage = ({firstPage}) => {
	function createMarkup () {
		return {__html: firstPage.content };
	}

	return (
		<div className="first-page">
			<h2>{firstPage.title}</h2>
			<div dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
};

FirstPage.propTypes = {
	firstPage: React.PropTypes.object.isRequired
};

export default FirstPage;