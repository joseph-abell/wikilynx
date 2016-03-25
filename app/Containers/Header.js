import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import { 
	cleanLinks, 
	cleanText, 
	resetGame, 
	retryGame 
} from '../Utils';

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
		},
		onRetryGameClick: (firstPage, lastPage) => {
			retryGame(dispatch, firstPage, lastPage);
		}
	};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;