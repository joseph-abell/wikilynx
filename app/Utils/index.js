import jsonp from 'jsonp';
import { 
	resetBreadcrumb, 
	getFirstPage, 
	getLastPage, 
	getCurrentPage, 
	getViewer, 
	completeGame, 
	addBreadcrumb, 
	toggleGameBoardLoading, 
	toggleViewerLoading, 
	toggleNewGame, 
	toggleNewGameLoading 
} from '../Actions';

export const cleanLinks = (links) => {
	let newLinks = [];
	for (var i = 0; i < links.length; i++) {
		let link = links[i]['*'];

		if (link.indexOf(':') == -1) {
			newLinks[newLinks.length] = {title: link};
		}
	}
	return newLinks;
};

export const cleanText = (text) => {
	text = text.replace(/style=\"[\s\S]*?\"/g, '');
	text = text.replace(/\<a[\s\S]*?\>/g, '');
	text = text.replace(/\<\/a\>/g, '');
	text = text.replace(/<span class="mw-editsection-bracket">[\s\S]*?[\[-\]][\s\S]*?<\/span>/g, '');
	text = text.replace(/<span class="mw-editsection">[\s\S]*?edit[\s\S]*?<\/span>/g, '');
	text = text.replace(/class=\"[\s\S]*?\"/g, '');
	return text;
};

export const resetGame = (dispatch) => {
	dispatch(toggleViewerLoading(true));
	dispatch(toggleGameBoardLoading(true));
	dispatch(toggleNewGame(true));
	dispatch(completeGame(false));
	dispatch(resetBreadcrumb());
	dispatch(getFirstPage(''));
	dispatch(getLastPage(''));
	dispatch(getCurrentPage('', []));
	dispatch(getViewer('', ''));
};

export const retryGame = (dispatch, firstTitle, lastTitle) => {
	dispatch(toggleViewerLoading(true));
	dispatch(toggleGameBoardLoading(true));
	dispatch(completeGame(false));
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
		
		dispatch(toggleViewerLoading(false));
		dispatch(toggleGameBoardLoading(false));
	});
};

export const dispatchNewGame = (dispatch, firstPageName, lastPageName, newLinks, text) => {
	dispatch(resetBreadcrumb());
	dispatch(addBreadcrumb(firstPageName));
	dispatch(getFirstPage(firstPageName));
	dispatch(getLastPage(lastPageName));
	dispatch(getCurrentPage(firstPageName, newLinks));
	dispatch(getViewer(firstPageName, text));
	dispatch(toggleViewerLoading(false));
	dispatch(toggleGameBoardLoading(false));
	dispatch(completeGame(false));
	dispatch(toggleNewGame(false));
	dispatch(toggleNewGameLoading(false));
};