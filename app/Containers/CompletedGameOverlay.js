import jsonp from 'jsonp';
import { connect } from 'react-redux';
import CompletedGameOverlay from '../Components/CompletedGameOverlay';
import { resetBreadcrumb, getFirstPage, getLastPage, getCurrentPage, getViewer, completeGame, addBreadcrumb, toggleGameBoardLoading, toggleViewerLoading } from '../Actions';
import { cleanLinks, cleanText } from '../Utils';

const mapStateToProps = (state) => {
	return {
		isCompleted: state.completeGame.isCompleted,
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
			dispatch(toggleViewerLoading(true));
			dispatch(toggleGameBoardLoading(true));
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions|title|text&grnlimit=2&uselang=user/', function (err, data) {
				const keys = Object.keys(data.query.pages);
				const name0 = data.query.pages[keys[0]].title;
				const name1 = data.query.pages[keys[1]].title;
				
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + name0 + '&prop=links|text', function (err, content0) {
					let links = content0.parse.links;
					let newLinks = cleanLinks(links);
					let text = content0.parse.text['*'];

					text = cleanText(text);

					dispatch(resetBreadcrumb());
					dispatch(addBreadcrumb(name0));
					dispatch(getFirstPage(name0));
					dispatch(getLastPage(name1));
					dispatch(getCurrentPage(name0, newLinks));
					dispatch(getViewer(name0, text));
					dispatch(completeGame(false));
					dispatch(toggleViewerLoading(false));
					dispatch(toggleGameBoardLoading(false));
				});
			});
		}
	};
};

const CompletedGameOverlayContainer = connect(mapStateToProps, mapDispatchToProps)(CompletedGameOverlay);

export default CompletedGameOverlayContainer;