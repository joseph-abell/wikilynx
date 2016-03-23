import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Link from '../Components/Link';
import { getViewer, addBreadcrumb, getCurrentPage, completeGame, toggleViewerLoading, toggleGameBoardLoading } from '../Actions';
import { cleanText, cleanLinks } from '../Utils';

const mapStateToProps = (state) => {
	return {
		completeGame: state.completeGame,
		lastPage: state.lastPage,
		breadcrumbs: state.breadcrumbs
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLinkClick: (title, finalTitle, breadcrumbs) => {
			dispatch(toggleGameBoardLoading(true));
			dispatch(toggleViewerLoading(true));
			if (title === finalTitle) {
				dispatch(addBreadcrumb(title));
				dispatch(completeGame(true));
				dispatch(toggleGameBoardLoading(false));
			dispatch(toggleViewerLoading(false));
			} else {
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + title + '&prop=text|links', function (err, content) {
					let links = content.parse.links;
					let newLinks = cleanLinks(links);
					let text = content.parse.text['*'];

					text = cleanText(text);
					dispatch(addBreadcrumb(title));
					dispatch(getViewer(title, text));
					dispatch(getCurrentPage(title, newLinks));
					dispatch(toggleGameBoardLoading(false));
					dispatch(toggleViewerLoading(false));
				});
			}
		}
	};
};

const LinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link);

export default LinkContainer;