import { connect } from 'react-redux';
import Overlay from '../Components/Overlay';
import { togglePlayerReady } from '../Actions';

const mapStateToProps = (state) => {
	console.log(state.overlay);

	if (state.overlay.playerReady === undefined) {
		return {
			playerReady: false
		};
	}

	return {
		playerReady: state.playerReady
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: (playerReady) => {
			debugger;
			dispatch(togglePlayerReady(!playerReady));	
		}
	};
};

const OverlayContainer = connect(mapStateToProps, mapDispatchToProps)(Overlay);

export default OverlayContainer;