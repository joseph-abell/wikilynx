import jsonp from 'jsonp';
import { 
	addBreadcrumb, 
	resetBreadcrumb,
	completeGame,
	currentPage, 
	customGame,
	firstPage, 
	gameBoardFilter,
	gameBoardLoading, 
	lastPage, 
	newGame, 
	newGameLoading,
	viewer,
	viewerLoading
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

export const dispatchResetGame = (dispatch) => {
	dispatch(resetBreadcrumb());
	dispatch(completeGame(false));
	dispatch(currentPage('', []));
	dispatch(customGame(false));
	dispatch(firstPage(''));
	dispatch(gameBoardFilter(''));
	dispatch(gameBoardLoading(true));
	dispatch(lastPage(''));
	dispatch(newGame(true));
	dispatch(viewer('', ''));
	dispatch(viewerLoading(true));
};

export const dispatchRetryGame = (dispatch, firstTitle, lastTitle) => {
	dispatch(viewerLoading(true));
	dispatch(gameBoardLoading(true));
	dispatch(completeGame(false));
	jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + firstTitle + '&prop=links|text', function (err, content0) {
		let links = content0.parse.links;
		links = cleanLinks(links);

		let text = content0.parse.text['*'];
		dispatch(resetBreadcrumb());
		dispatch(addBreadcrumb(firstTitle));
		dispatch(firstPage(firstTitle));
		dispatch(lastPage(lastTitle));
		dispatch(customGame(false));
		dispatch(currentPage(firstTitle, links));
		dispatch(viewer(firstTitle, text));
		dispatch(gameBoardFilter(''));
		
		dispatch(viewerLoading(false));
		dispatch(gameBoardLoading(false));
	});
};

export const dispatchNewGame = (dispatch, firstPageName, lastPageName, newLinks, newText) => {
	dispatch(resetBreadcrumb());
	dispatch(addBreadcrumb(firstPageName));
	dispatch(firstPage(firstPageName));
	dispatch(lastPage(lastPageName));
	dispatch(currentPage(firstPageName, newLinks));
	dispatch(viewer(firstPageName, newText));
	dispatch(viewerLoading(false));
	dispatch(gameBoardLoading(false));
	dispatch(completeGame(false));
	dispatch(newGame(false));
	dispatch(newGameLoading(false));
	dispatch(gameBoardFilter(''));
};

export const setupNewGame = (dispatch, firstPageName, lastPageName, isFullyRandomGame) => {
	if (isFullyRandomGame) {
		setupRandomGame(dispatch);
	} else {
		jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + firstPageName + '&prop=links|text', function (err, content) {
			if (!content.parse) {
				alert('The title for the first page is incorrect. Please check your spelling, copying exactly from wikipedia, and try again.');
				dispatch(newGameLoading(false));
				return false;
			}

			const links = content.parse.links;
			const newLinks = cleanLinks(links);

			const text = content.parse.text['*'];
			const newText = cleanText(text);
			
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + lastPageName + '&prop=text', function (lastPageError, lastPageContent) {
				if (!lastPageContent.parse) {
					alert('The content for the Last Page is incorrect. Please check your spelling, copying exactly from wikipedia, and try again.');
					dispatch(newGameLoading(false));
					return false;				
				}

				dispatchNewGame(dispatch, firstPageName, lastPageName, newLinks, text);
			});
		});
	}		
};

export const setupRandomGame = (dispatch) => {
	dispatch(newGameLoading(true));
	dispatch(viewerLoading(true));
	dispatch(gameBoardLoading(true));

	jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=title&grnlimit=2&uselang=user/', function (err, data) {
		const keys = Object.keys(data.query.pages);
		const name0 = data.query.pages[keys[0]].title;
		const name1 = data.query.pages[keys[1]].title;
		setupNewGame(dispatch, name0, name1, true);
	});	
};
