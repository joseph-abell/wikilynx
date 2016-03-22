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
	toggleNewGame,
	toggleNewGameLoading
} from '../Actions';

import { cleanText, cleanLinks, dispatchNewGame } from '../Utils';

const setupNewGame = (dispatch, firstPageName, lastPageName, isFullyRandomGame) => {
	jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + firstPageName + '&prop=links|text', function (err, content) {
		if (!content.parse) {
			if (isFullyRandomGame) {
				alert('Oops, something went wrong when trying to get the first page from Wikipedia. Please try again.');
				dispatch(toggleNewGameLoading(false));
				return false;
			}

			alert('The content for the First Page is incorrect. Please check your spelling, and try again.');
			dispatch(toggleNewGameLoading(false));
			return false;
		}

		let links = content.parse.links;
		let newLinks = cleanLinks(links);
		let text = content.parse.text['*'];
		
		text = cleanText(text);

		if (isFullyRandomGame) {
			dispatchNewGame(dispatch, firstPageName, lastPageName, newLinks, text);	
		} else {
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + lastPageName + '&prop=text', function (lastPageError, lastPageContent) {
				if (!lastPageContent.parse) {
					alert('The content for the Last Page is incorrect. Please check your spelling, and try again.');
					dispatch(toggleNewGameLoading(false));
					return false;				
				}

				dispatchNewGame(dispatch, firstPageName, lastPageName, newLinks, text);
			});
		}
	});
};

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRandomGameClick: () => {
			dispatch(toggleNewGameLoading(true));
			dispatch(toggleViewerLoading(true));
			dispatch(toggleGameBoardLoading(true));

			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=title&grnlimit=2&uselang=user/', function (err, data) {
				const keys = Object.keys(data.query.pages);
				const name0 = data.query.pages[keys[0]].title;
				const name1 = data.query.pages[keys[1]].title;
				setupNewGame(dispatch, name0, name1, true);
			});	
		},
		onCustomGameClick: (firstPage = '', lastPage = '') => {
			dispatch(toggleNewGameLoading(true));
			if ((firstPage === '') && (lastPage === '')) {
				mapDispatchToProps(dispatch).onRandomGameClick();
			} else if (firstPage === '') {
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=title&grnlimit=1&uselang=user/', function (err, data) {
					const keys = Object.keys(data.query.pages);
					firstPage = data.query.pages[keys[0]].title;
					setupNewGame(dispatch, firstPage, lastPage, false);
				});
			} else if (lastPage === '') {
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=title&grnlimit=1&uselang=user/', function (err, data) {
					const keys = Object.keys(data.query.pages);
					lastPage = data.query.pages[keys[0]].title;
					setupNewGame(dispatch, firstPage, lastPage, false);
				});
			} else {
				setupNewGame(dispatch, firstPage, lastPage, false);
			}
		}
	};
};

const NewGameContainer = connect(mapStateToProps, mapDispatchToProps)(NewGame);

export default NewGameContainer;