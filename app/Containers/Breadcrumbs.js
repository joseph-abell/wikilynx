import { connect } from 'react-redux';
import Breadcrumbs from '../Components/Breadcrumbs';
import { 
	dispatchResetGame, 
	dispatchRetryGame 
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
			dispatchResetGame(dispatch);
		},
		onRetryGameClick: (firstPage, lastPage) => {
			dispatchRetryGame(dispatch, firstPage, lastPage);
		}
	};
};

const BreadcrumbsContainer = connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);

export default BreadcrumbsContainer;