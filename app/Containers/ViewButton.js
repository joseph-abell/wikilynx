import jsonp from 'jsonp';
import { connect } from 'react-redux';
import ViewButton from '../Components/ViewButton';
import { getViewer } from '../Actions';

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onViewClick: (title) => {
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + title + '&prop=text', function (err, content) {
				let text = content.parse.text['*'];

				text = text.replace(/style=\"[\s\S]*?\"/g, '');
				text = text.replace(/\<a[\s\S]*?\>/g, '');
				text = text.replace(/\<\/a\>/g, '');
				text = text.replace(/<span class="mw-editsection-bracket">[\s\S]*?[\[-\]][\s\S]*?<\/span>/g, '');
				text = text.replace(/<span class="mw-editsection">[\s\S]*?edit[\s\S]*?<\/span>/g, '');
				text = text.replace(/class=\"[\s\S]*?\"/g, '');

				dispatch(getViewer(title, text));
			});
		}
	};
};

const ViewButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ViewButton);

export default ViewButtonContainer;