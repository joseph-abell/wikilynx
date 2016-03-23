import jsonp from 'jsonp';
import { connect } from 'react-redux';
import CompletedGame from '../Components/CompletedGame';
import { resetBreadcrumb, getFirstPage, getLastPage, getCurrentPage, getViewer, completeGame, addBreadcrumb, toggleGameBoardLoading, toggleViewerLoading, toggleNewGame } from '../Actions';
import { cleanLinks, cleanText, resetGame } from '../Utils';

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
			dispatch(toggleViewerLoading(true));
			dispatch(toggleGameBoardLoading(true));
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + firstTitle + '&prop=links|text', function (err, content0) {
				let links = content0.parse.links;
				links = cleanLinks(links);
	
				let text = content0.parse.text['*'];
				
				dispatch(resetBreadcrumb());
				dispatch(addBreadcrumb(firstTitle));
				dispatch(getFirstPage(firstTitle));
				dispatch(getLastPage(lastTitle));
				dispatch(getCurrentPage(firstTitle, links));
				dispatch(getViewer(firstTitle, text));
				dispatch(completeGame(false));
				dispatch(toggleViewerLoading(false));
				dispatch(toggleGameBoardLoading(false));
			});
		},
		onResetClick: () => {
			resetGame(dispatch);
		}
	};
};

const CompletedGameContainer = connect(mapStateToProps, mapDispatchToProps)(CompletedGame);

export default CompletedGameContainer;