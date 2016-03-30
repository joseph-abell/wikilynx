import jsonp from 'jsonp';
import { connect } from 'react-redux';
import LinkButton from '../Components/LinkButton';
import { 
	addBreadcrumb, 
	completeGame, 
	currentPage, 
	gameBoardFilter,
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
		currentPage: {
			title: state.currentPage.title
		}
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
					if (content.error) {
						alert('It looks like the page you click doesn\'t exist. Try a different page.');
						dispatch(gameBoardFilter(''));
						dispatch(gameBoardLoading(false));
						dispatch(viewerLoading(false));	
						return false;
					}
	
					const links = content.parse.links;
					const newLinks = cleanLinks(links);
					
					const text = content.parse.text['*'];
					const newText = cleanText(text);

					dispatch(addBreadcrumb(title));
					dispatch(viewer(title, newText));
					dispatch(currentPage(title, newLinks));
					dispatch(gameBoardFilter(''));
					dispatch(gameBoardLoading(false));
					dispatch(viewerLoading(false));	
				});
			}
		}
	};
};

const LinkButtonContainer = connect(mapStateToProps, mapDispatchToProps)(LinkButton);

export default LinkButtonContainer;