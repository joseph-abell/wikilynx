import React from 'react';

const FirstPage = ({firstPage}) => {
	var revision;
	if (firstPage.revisions) {
		revision = firstPage.revisions[0]['*'];
	}

	return (
		<div>
			<h2>First Page</h2>
			<h3>{firstPage.title}</h3>
			<p>{revision}</p>
		</div>
	);
};

FirstPage.propTypes = {
	firstPage: React.PropTypes.object.isRequired
};

export default FirstPage;