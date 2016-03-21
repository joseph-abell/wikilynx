import { resetBreadcrumb, getFirstPage, getLastPage, getCurrentPage, getViewer, completeGame, addBreadcrumb, toggleGameBoardLoading, toggleViewerLoading, toggleNewGame } from '../Actions';

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
	console.log(text);
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