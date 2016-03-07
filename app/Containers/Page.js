import { connect } from 'react-redux';
import jsonp from 'jsonp';
import Page from '../Components/Page';
import { getPage } from '../Actions';

const mapStateToProps = (state) => {
	if (state.pages.length === 0) {
		return {
			name: '',
			content: '',
			playerReady: false
		};
	}
	
	return {
		name: state.pages[state.pages.length - 1].name,
		content: state.pages[state.pages.length - 1].content,
		playerReady: state.overlay.playerReady
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&grnlimit=1&uselang=user/', function (err, data) {
				if (err) { 
					console.error(err);
				}
				const key = Object.keys(data.query.pages);
				const name = data.query.pages[key].title;

				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + name + '&prop=text', function (err, newData) {
					let content = newData.parse.text['*'];

					content = content.replace(/(style="(.)*")/g, '');
					content = content.replace(/href="\/wiki\//g, 'data-url="');
					content = content.replace(/<span class="mw-editsection">/g, '<span class="mw-editsection" style="display: none">');

					dispatch(getPage(name, content));
				});
			});
		}
	};
};

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);

export default PageContainer;