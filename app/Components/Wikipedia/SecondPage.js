import React from 'react';

const SecondPage = ({secondPage}) => {
	var revision;
	if (secondPage.revisions) {
		revision = secondPage.revisions[0]['*'];
	}
	return (
		<div>
			<h2>Last Page</h2>
			<h3>{secondPage.title}</h3>
			<p>{revision}</p>
		</div>
	);
};

SecondPage.propTypes = {
	secondPage: React.PropTypes.object.isRequired
};

export default SecondPage;