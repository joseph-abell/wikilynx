import { connect } from 'react-redux';
import Filter from '../Components/Filter';
import { getFilter } from '../Actions';

const mapStateToProps = (state) => {
	return {
		filter: state.filter
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFilterChange: (event) => {
			console.log(event);
			dispatch(getFilter(event.target.value));
		}
	};
};
const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;