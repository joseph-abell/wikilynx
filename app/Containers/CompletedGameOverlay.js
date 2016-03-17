import jsonp from 'jsonp';
import { connect } from 'react-redux';
import CompletedGameOverlay from '../Components/CompletedGameOverlay';
import { resetBreadcrumb, getFirstPage, getLastPage, getCurrentPage, getViewer, completeGame, addBreadcrumb } from '../Actions';

const cleanLinks = (links) => {
	let newLinks = [];
	for (var i = 0; i < links.length; i++) {
		let link = links[i]['*'];

		if (link.indexOf(':') == -1) {
			newLinks[newLinks.length] = {title: link};
		}
	}
	return newLinks;
};

const mapStateToProps = (state) => {
	console.log(state);
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
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + firstTitle + '&prop=links|text', function (err, content0) {
				let links = content0.parse.links;
				links = cleanLinks(links);
	
				let text = content0.parse.text['*'];
				text = text.replace(/style=\"[\s\S]*?\"/g, '');
				text = text.replace(/\<a[\s\S]*?\>/g, '');
				text = text.replace(/\<\/a\>/g, '');
				text = text.replace(/<span class="mw-editsection-bracket">[\s\S]*?[\[-\]][\s\S]*?<\/span>/g, '');
				text = text.replace(/<span class="mw-editsection">[\s\S]*?edit[\s\S]*?<\/span>/g, '');
				text = text.replace(/class=\"[\s\S]*?\"/g, '');

				dispatch(resetBreadcrumb());
				dispatch(addBreadcrumb(firstTitle));
				dispatch(getFirstPage(firstTitle));
				dispatch(getLastPage(lastTitle));
				dispatch(getCurrentPage(firstTitle, links));
				dispatch(getViewer(firstTitle, text));
				dispatch(completeGame(false));
			});
		},
		onResetClick: () => {
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions|title|text&grnlimit=2&uselang=user/', function (err, data) {
				const keys = Object.keys(data.query.pages);
				const name0 = data.query.pages[keys[0]].title;
				const name1 = data.query.pages[keys[1]].title;
				
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + name0 + '&prop=links|text', function (err, content0) {
					let links = content0.parse.links;
					let newLinks = cleanLinks(links);
					let text = content0.parse.text['*'];

					text = text.replace(/style=\"[\s\S]*?\"/g, '');
					text = text.replace(/\<a[\s\S]*?\>/g, '');
					text = text.replace(/\<\/a\>/g, '');
					text = text.replace(/<span class="mw-editsection-bracket">[\s\S]*?[\[-\]][\s\S]*?<\/span>/g, '');
					text = text.replace(/<span class="mw-editsection">[\s\S]*?edit[\s\S]*?<\/span>/g, '');
					text = text.replace(/class=\"[\s\S]*?\"/g, '');

					dispatch(resetBreadcrumb());
					dispatch(addBreadcrumb(name0));
					dispatch(getFirstPage(name0));
					dispatch(getLastPage(name1));
					dispatch(getCurrentPage(name0, newLinks));
					dispatch(getViewer(name0, text));
					dispatch(completeGame(false));
				});
			});
		}
	};
};

const CompletedGameOverlayContainer = connect(mapStateToProps, mapDispatchToProps)(CompletedGameOverlay);

export default CompletedGameOverlayContainer;