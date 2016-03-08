import { connect } from 'react-redux';
import jsonp from 'jsonp';
import LastPage from '../Components/LastPage';
import { getLastPage } from '../Actions';

const mapStateToProps = (state) => {
	if (state.lastPage.name === undefined || state.lastPage.content === undefined) {
		return {
			name: '',
			content: '',
			playerReady: false
		};
	}
	
	return {
		name: state.lastPage.name,
		content: state.lastPage.content,
		playerReady: state.overlay.playerReady
	};
};

const LastPageContainer = connect(mapStateToProps)(LastPage);

export default LastPageContainer;