import React, { PropTypes, Component } from 'react';

class Filter extends Component {
	render () {
		let { filter, onFilterChange } = this.props;

		return (
			<input
				type="text"
				value={filter}
				placeholder="Search Moves"
				onChange={(event) => {
					onFilterChange(event);
				}}
			  />
		);
	}
};

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	onFilterChange: PropTypes.func.isRequired
};

export default Filter;