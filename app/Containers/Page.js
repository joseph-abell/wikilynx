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

const PageContainer = connect(mapStateToProps)(Page);

export default PageContainer;