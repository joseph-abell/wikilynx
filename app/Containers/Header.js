import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import { togglePlayerReady, getFirstPage, getLastPage, getCurrentPage, getViewer, addBreadcrumb } from '../Actions';

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
		title: state.viewer.title, 
		content: state.viewer.content,
		firstTitle: state.firstPage,
		lastTitle: state.lastPage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRandomGameClick: () => {
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

					dispatch(addBreadcrumb(name0));
					dispatch(getFirstPage(name0));
					dispatch(getLastPage(name1));
					dispatch(getCurrentPage(name0, newLinks));
					dispatch(getViewer(name0, text));
				});
			});
		}
	};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;