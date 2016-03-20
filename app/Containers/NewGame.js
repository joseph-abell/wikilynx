import jsonp from 'jsonp';
import { connect } from 'react-redux';
import NewGame from '../Components/NewGame.js';
import { 
	toggleViewerLoading, 
	toggleGameBoardLoading, 
	resetBreadcrumb, 
	getFirstPage, 
	getLastPage, 
	getCurrentPage, 
	getViewer, 
	completeGame, 
	addBreadcrumb,
	toggleNewGame
} from '../Actions';
import { cleanText, cleanLinks } from '../Utils';

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRandomGameClick: () => {
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
					dispatch(toggleViewerLoading(false));
					dispatch(toggleGameBoardLoading(false));
					dispatch(completeGame(false));
					dispatch(toggleNewGame(false));
				});
			});	
		},
		onCustomGameClick: (firstPage, lastPage) => {
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + firstPage + '&prop=links|text', function (err, content) {
				let links = content.parse.links;
				let newLinks = cleanLinks(links);
				let text = content.parse.text['*'];

				dispatch(resetBreadcrumb());
				dispatch(addBreadcrumb(firstPage));
				dispatch(getFirstPage(firstPage));
				dispatch(getLastPage(lastPage));
				dispatch(getCurrentPage(firstPage, newLinks));
				dispatch(getViewer(firstPage, text));
				dispatch(toggleViewerLoading(false));
				dispatch(toggleGameBoardLoading(false));
				dispatch(completeGame(false));
				dispatch(toggleNewGame(false));
			});
		}
	};
};

const NewGameContainer = connect(mapStateToProps, mapDispatchToProps)(NewGame);

export default NewGameContainer;