import React, { PropTypes } from 'react';

const LastPage = ({ name, content, onLastPageClick }) => (
	<div>
		<h3>
			To:{' '}{name}
			<span onClick={onLastPageClick}>- Random Page</span>
		</h3>
		{content && <div>{content}</div>}
	</div>
);

LastPage.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	onLastPageClick: PropTypes.func.isRequired
};

export default LastPage;