import { connect } from 'react-redux';
import jsonp from 'jsonp';
import Page from '../Components/Page';
import { getPage } from '../Actions';

const mapStateToProps = (state) => {
	if (state.pages.length === 0) {
		return {
			name: '',
			content: ''
		};
	}
	
	return {
		name: state.pages[state.pages.length - 1].name,
		content: state.pages[state.pages.length - 1].content
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
					const content = newData.parse.text['*'];

					dispatch(getPage(name, content));
				});
			});
		}
	};
};

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);

export default PageContainer;