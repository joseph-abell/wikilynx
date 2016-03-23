import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import { cleanLinks, cleanText, resetGame } from '../Utils';
import { 
	togglePlayerReady, 
	getFirstPage, 
	getLastPage, 
	getCurrentPage, 
	getViewer, 
	resetBreadcrumb, 
	addBreadcrumb, 
	toggleViewerLoading,
	toggleGameBoardLoading,
	completeGame
} from '../Actions';

const mapStateToProps = (state) => {
	return {
		title: state.viewer.title, 
		content: state.viewer.content,
		firstTitle: state.firstPage,
		lastTitle: state.lastPage,
		completeGame: state.completeGame,
		newGame: state.newGame
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRandomGameClick: () => {
			resetGame(dispatch);
		}
	};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;