import React from 'react';

const SecondPage = ({secondPage}) => {
	function createMarkup () {
		return {__html: secondPage.content };
	}

	return (
		<div className="second-page">
			<h2>{secondPage.title}</h2>
			<div dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
};

SecondPage.propTypes = {
	secondPage: React.PropTypes.object.isRequired
};

export default SecondPage;