import React, { PropTypes } from 'react';

const Page = ({ name, content, onClick }) => (
	<div>
		<h3>
			Get From:{' '}{name}
			<span onClick={onClick}>- Random Page</span>
		</h3>
		<div>{content}</div>
	</div>
);

Page.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Page;