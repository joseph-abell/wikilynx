import { connect } from 'react-redux';
import Breadcrumbs from '../Components/Breadcrumbs';
import { 
	resetGame, 
	retryGame 
} from '../Utils';

const mapStateToProps = (state) => {
	return {
		breadcrumbs: state.breadcrumbs,
		completeGame: state.completeGame,
		firstPage: state.firstPage,
		lastPage: state.lastPage,
		newGame: state.newGame
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRandomGameClick: () => {
			resetGame(dispatch);
		},
		onRetryGameClick: (firstPage, lastPage) => {
			retryGame(dispatch, firstPage, lastPage);
		}
	};
};

const BreadcrumbsContainer = connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);

export default BreadcrumbsContainer;