import jsonp from 'jsonp';
import { connect } from 'react-redux';
import BackButton from '../Components/BackButton';
import { 
	viewer, 
	viewerLoading,
	removeBreadcrumb,
	currentPage,
	gameBoardLoading,
	gameBoardFilter
} from '../Actions';

import { 
	cleanText, 
	cleanLinks 
} from '../Utils';

const mapStateToProps = (state) => {
	return {
		breadcrumbs: state.breadcrumbs
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onBackClick: (title, breadcrumbs) => {
			dispatch(viewerLoading(true));
			dispatch(gameBoardLoading(true));

			let breadcrumbId;
			
			for (let i = 0; i < breadcrumbs.length; i++) {
				const breadcrumb = breadcrumbs[i].title;

				if (breadcrumb === title) {
					breadcrumbId = i;
				}
			}

			let breadcrumbsCount = breadcrumbs.length;
			while (breadcrumbsCount > 0) {
				const breadcrumb = breadcrumbs[breadcrumbsCount - 1].title;

				if (breadcrumb !== title) {
					dispatch(removeBreadcrumb(breadcrumb));
				} else {
					breadcrumbsCount = 0;
				}

				breadcrumbsCount = --breadcrumbsCount;
			}

			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + title + '&prop=text|links', function (err, content) {
				if (err) {
					alert(err);
					return false;	
				}
				const links = content.parse.links;
				const newLinks = cleanLinks(links);

				const text = content.parse.text['*'];
				const newText = cleanText(text);

				dispatch(viewer(title, newText));
				dispatch(currentPage(title, newLinks));
				dispatch(gameBoardFilter(''));
				dispatch(gameBoardLoading(false));
				dispatch(viewerLoading(false));
			});
		}
	};
};

const BackButtonContainer = connect(mapStateToProps, mapDispatchToProps)(BackButton);

export default BackButtonContainer;