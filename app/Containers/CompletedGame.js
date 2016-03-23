import jsonp from 'jsonp';
import { connect } from 'react-redux';
import CompletedGame from '../Components/CompletedGame';
import { resetBreadcrumb, getFirstPage, getLastPage, getCurrentPage, getViewer, completeGame, addBreadcrumb, toggleGameBoardLoading, toggleViewerLoading, toggleNewGame } from '../Actions';
import { cleanLinks, cleanText, resetGame, retryGame } from '../Utils';

const mapStateToProps = (state) => {
	return {
		completeGame: state.completeGame,
		breadcrumbs: state.breadcrumbs,
		firstTitle: state.firstPage,
		lastTitle: state.lastPage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRetryClick: (firstTitle, lastTitle) => {
			retryGame(dispatch, firstTitle, lastTitle);
		},
		onResetClick: () => {
			resetGame(dispatch);
		}
	};
};

const CompletedGameContainer = connect(mapStateToProps, mapDispatchToProps)(CompletedGame);

export default CompletedGameContainer;