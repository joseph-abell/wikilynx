import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Link from '../Components/Link';
import { getViewer, addBreadcrumb, getCurrentPage, completeGame } from '../Actions';

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
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLinkClick: (title, finalTitle, breadcrumbs) => {
			if (title === finalTitle) {
				dispatch(addBreadcrumb(title));
				dispatch(completeGame(true, breadcrumbs));
			} else {
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + title + '&prop=text|links', function (err, content) {
					let links = content.parse.links;
					let newLinks = cleanLinks(links);
					let text = content.parse.text['*'];

					text = text.replace(/style=\"[\s\S]*?\"/g, '');
					text = text.replace(/\<a[\s\S]*?\>/g, '');
					text = text.replace(/\<\/a\>/g, '');
					text = text.replace(/<span class="mw-editsection-bracket">[\s\S]*?[\[-\]][\s\S]*?<\/span>/g, '');
					text = text.replace(/<span class="mw-editsection">[\s\S]*?edit[\s\S]*?<\/span>/g, '');
					text = text.replace(/class=\"[\s\S]*?\"/g, '');

					dispatch(addBreadcrumb(title));
					dispatch(getViewer(title, text));
					dispatch(getCurrentPage(title, newLinks));
				});
			}
		}
	};
};

const LinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link);

export default LinkContainer;