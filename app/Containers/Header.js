import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import { cleanLinks, cleanText } from '../Utils';
import { 
	togglePlayerReady, 
	getFirstPage, 
	getLastPage, 
	getCurrentPage, 
	getViewer, 
	resetBreadcrumb, 
	addBreadcrumb, 
	toggleViewerLoading,
	toggleGameBoardLoading,
} from '../Actions';

const mapStateToProps = (state) => {
	return {
		title: state.viewer.title, 
		content: state.viewer.content,
		firstTitle: state.firstPage,
		lastTitle: state.lastPage,
		isCompleted: state.completeGame.isCompleted
	};
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
				});
			});
		}
	};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;