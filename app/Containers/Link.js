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
					const links = content.parse.links;
					const newLinks = cleanLinks(links);

					const text = content.parse.text['*'];
					const newText = cleanText(text);
					
					dispatch(addBreadcrumb(title));
					dispatch(viewer(title, newText));
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