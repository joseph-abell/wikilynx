import { connect } from 'react-redux';
import Filter from '../Components/Filter';
import { gameBoardFilter } from '../Actions';

const mapStateToProps = (state) => {
	return {
		filter: state.gameBoardFilter
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFilterChange: (event) => {
			dispatch(gameBoardFilter(event.target.value));
		}
	};
};
const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;