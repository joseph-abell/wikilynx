import { connect } from 'react-redux';
import jsonp from 'jsonp';
import LastPage from '../Components/LastPage';
import { getLastPage } from '../Actions';

const mapStateToProps = (state) => {
	if (state.lastPage.name === undefined || state.lastPage.content === undefined) {
		return {
			name: '',
			content: ''
		};
	}
	
	return {
		name: state.lastPage.name,
		content: state.lastPage.content
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onLastPageClick: () => {
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&grnlimit=1&uselang=user/', function (err, data) {
				if (err) { 
					console.error(err);
				}
				const key = Object.keys(data.query.pages);
				const name = data.query.pages[key].title;

				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + name + '&prop=text', function (err, newData) {
					const content = newData.parse.text['*'];

					dispatch(getLastPage(name, content));
				});
			});
		}
	};
};

const LastPageContainer = connect(mapStateToProps, mapDispatchToProps)(LastPage);

export default LastPageContainer;