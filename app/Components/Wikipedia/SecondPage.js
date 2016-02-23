import React from 'react';

const SecondPage = () => {
	return (
		<div>Second Page</div>
	);
};

SecondPage.propTypes = {
	id: React.PropTypes.string.isRequired,
	secondPage: React.PropTypes.string.isRequired
};

export default SecondPage;