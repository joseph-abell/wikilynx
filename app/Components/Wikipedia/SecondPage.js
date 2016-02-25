import React from 'react';

const SecondPage = ({secondPage}) => {
	function createMarkup () {
		return {__html: secondPage.content };
	}

	return (
		<div>
			<h2>{secondPage.title}</h2>
			<p dangerouslySetInnerHTML={createMarkup()}></p>
		</div>
	);
};

SecondPage.propTypes = {
	secondPage: React.PropTypes.object.isRequired
};

export default SecondPage;