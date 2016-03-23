import { connect } from 'react-redux';
import Viewer from '../Components/Viewer';
import { getViewerPage } from '../Actions';

const mapStateToProps = (state) => {
	return {
		title: state.viewer.title, 
		content: state.viewer.content,
		completeGame: state.completeGame,
		viewerLoading: state.viewerLoading
	};
};

const ViewerContainer = connect(mapStateToProps)(Viewer);

export default ViewerContainer;