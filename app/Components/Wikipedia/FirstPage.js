import React from 'react';

const FirstPage = ({firstPage}) => {
	return (
		<div>
			<h2>First Page</h2>
			<h3>{firstPage.title}</h3>
			<p>{firstPage.content}</p>
		</div>
	);
};

FirstPage.propTypes = {
	firstPage: React.PropTypes.object.isRequired
};

export default FirstPage;