import { connect } from 'react-redux';
import Breadcrumbs from '../Components/Breadcrumbs';

const mapStateToProps = (state) => {
	return {
		breadcrumbs: state.breadcrumbs,
		isCompleted: state.completeGame.isCompleted
	};
};

const BreadcrumbsContainer = connect(mapStateToProps)(Breadcrumbs);

export default BreadcrumbsContainer;