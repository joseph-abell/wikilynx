import jsonp from 'jsonp';
import { connect } from 'react-redux';
import ViewButton from '../Components/ViewButton';
import { 
	viewer, 
	viewerLoading 
} from '../Actions';
import { cleanText } from '../Utils';

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onViewClick: (title) => {
			dispatch(viewerLoading(true));

			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + title + '&prop=text', function (err, content) {
				let text = content.parse.text['*'];
				text = cleanText(text);

				dispatch(viewer(title, text));
				dispatch(viewerLoading(false));
			});
		}
	};
};

const ViewButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ViewButton);

export default ViewButtonContainer;