import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import { togglePlayerReady, getFirstPage, getLastPage, getCurrentPage, getViewer } from '../Actions';

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
	return {
		title: state.viewer.title, 
		content: state.viewer.content 
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

					dispatch(getFirstPage(name0));
					dispatch(getLastPage(name1));
					dispatch(getCurrentPage(name0, newLinks));
					dispatch(getViewer(name0, content0.parse.text['*']));
				});
			});
		}
	};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;