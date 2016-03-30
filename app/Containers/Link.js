import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Link from '../Components/Link';
import { 
	addBreadcrumb, 
	currentPage, 
	completeGame, 
	gameBoardLoading,
	viewer,
	viewerLoading
} from '../Actions';

import { 
	cleanText, 
	cleanLinks 
} from '../Utils';

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
			dispatch(gameBoardLoading(true));
			dispatch(viewerLoading(true));

			if (title === finalTitle) {
				dispatch(addBreadcrumb(title));
				dispatch(completeGame(true));
				dispatch(gameBoardLoading(false));
				dispatch(viewerLoading(false));
			} else {
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + title + '&prop=text|links', function (err, content) {
					let links = content.parse.links;
					let newLinks = cleanLinks(links);
					let text = content.parse.text['*'];

					text = cleanText(text);
					dispatch(addBreadcrumb(title));
					dispatch(viewer(title, text));
					dispatch(currentPage(title, newLinks));
					dispatch(gameBoardLoading(false));
					dispatch(viewerLoading(false));
				});
			}
		}
	};
};

const LinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link);

export default LinkContainer;