import React from 'react';

const FirstPage = () => {
	return (
		<div>First Page</div>
	);
};

FirstPage.propTypes = {
	id: React.PropTypes.string.isRequired,
	firstPage: React.PropTypes.string.isRequired
};

export default FirstPage;