import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Overlay from '../Components/Overlay';
import { togglePlayerReady, getPage, getLastPage } from '../Actions';

const cleanHtml = (content) => {
	content = content.replace(/(style="[\s\S]+?")/g, '');
	content = content.replace(/<span class="mw-editsection">/g, '<span class="mw-editsection" style="display: none">');
	content = content.replace(/<div id="toc"/g, '<div style="display: none;"');
	content = content.replace(/<li class="nv-view">([\s\S]+?)(<li class="nv-edit">([\s\S]+?)<\/li>)/g, '');
	content = content.replace(/<ol class="references">[\s\S]+?(<\/ol>)/g, '');
	content = content.replace(/<span class="mw-headline" id="References">References<\/span>/g, '');
	content = content.replace(/href="[\s\S]+?(")/g, '');
	content = content.replace(/<span id="coordinates"/g, '<span style="display: none;"');
	content = content.replace(/<!--[\s\S]+?(-->)/g, '');

	const linkArray = content.match(/(<a[\s\S]+?(<\/a>))/gm);
	let filteredLinkArray = [];
	for (let i = 0; i < linkArray.length; i++) {
		if (!linkArray[i].match(/(title=[\s\S]+?")/g)) {
			filteredLinkArray[filteredLinkArray.length] = linkArray[i];
		}
	}
	for (let j = 0; j < filteredLinkArray.length; j++) {
		const newLink = filteredLinkArray[j].replace(/<a/g, '<a style="color: #000;"');
		content = content.replace(filteredLinkArray[j], newLink);
	}
	

	return content;
};

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

					content0 = cleanHtml(content0);

					dispatch(getPage(name0, content0));

					jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + name1 + '&prop=text', function (err, content1) {
						content1 = content1.parse.text['*'];

						content1 = cleanHtml(content1);

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