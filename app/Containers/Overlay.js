import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Overlay from '../Components/Overlay';
import { togglePlayerReady, getPage, getLastPage } from '../Actions';

const mapStateToProps = (state) => {
	
	if (state.overlay.playerReady === undefined) {
		return {
			playerReady: false
		};
	}

	return {
		playerReady: state.overlay.playerReady
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onOverlayClick: (playerReady) => {
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&grnlimit=2&uselang=user/', function (err, data) {
				dispatch(togglePlayerReady(false));

				const keys = Object.keys(data.query.pages);
				const key0 = keys[0];
				const key1 = keys[1];
				const name0 = data.query.pages[key0].title;
				const name1 = data.query.pages[key1].title;

				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + name0 + '&prop=text', function (err, content0) {
					content0 = content0.parse.text['*'];

					content0 = content0.replace(/(style="(.)*")/g, '');
					content0 = content0.replace(/href="\/wiki\//g, 'data-url="');
					content0 = content0.replace(/<span class="mw-editsection">/g, '<span class="mw-editsection" style="display: none">');

					dispatch(getPage(name0, content0));

					jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + name1 + '&prop=text', function (err, content1) {
						content1 = content1.parse.text['*'];

						content1 = content1.replace(/(style="(.)*")/g, '');
						content1 = content1.replace(/href="\/wiki\//g, 'data-url="');
						content1 = content1.replace(/<span class="mw-editsection">/g, '<span class="mw-editsection" style="display: none">');

						dispatch(getLastPage(name1, content1));
						dispatch(togglePlayerReady(true));
					});
				});
				
			});
		}
	};
};

const OverlayContainer = connect(mapStateToProps, mapDispatchToProps)(Overlay);

export default OverlayContainer;