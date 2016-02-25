import React from 'react';

const SecondPage = ({secondPage}) => {
	function createMarkup () {
		return {__html: secondPage.content };
	}

	return (
		<div className="second-page" style={{height: 300, overflow: 'auto',border: '1px solid #e7e7e7', marginBottom: 20, padding: 20, background: '#f8f8f8'}}>
			<h2>{secondPage.title}</h2>
			<div dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
};

SecondPage.propTypes = {
	secondPage: React.PropTypes.object.isRequired
};

export default SecondPage;