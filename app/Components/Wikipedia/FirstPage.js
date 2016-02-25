import React from 'react';

const FirstPage = ({firstPage}) => {
	function createMarkup () {
		return {__html: firstPage.content };
	}

	return (
		<div>
			<h2>{firstPage.title}</h2>
			<p dangerouslySetInnerHTML={createMarkup()}></p>
		</div>
	);
};

FirstPage.propTypes = {
	firstPage: React.PropTypes.object.isRequired
};

export default FirstPage;