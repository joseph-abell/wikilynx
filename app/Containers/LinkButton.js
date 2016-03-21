import jsonp from 'jsonp';
import { connect } from 'react-redux';
import LinkButton from '../Components/LinkButton';
import { toggleGameBoardLoading, toggleViewerLoading, addBreadcrumb, completeGame, getViewer, getCurrentPage } from '../Actions';
import { cleanText, cleanLinks } from '../Utils';

const mapStateToProps = (state) => {
	return {
		currentPage: {
			title: state.currentPage.title
		}
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

const LinkButtonContainer = connect(mapStateToProps, mapDispatchToProps)(LinkButton);

export default LinkButtonContainer;