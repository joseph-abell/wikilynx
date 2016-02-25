import React from 'react';

const SecondPage = ({secondPage}) => {
	return (
		<div>
			<h2>Last Page</h2>
			<h3>{secondPage.title}</h3>
			<p>{secondPage.content}</p>
		</div>
	);
};

SecondPage.propTypes = {
	secondPage: React.PropTypes.object.isRequired
};

export default SecondPage;