import jsonp from 'jsonp';
import { connect } from 'react-redux';
import NewGame from '../Components/NewGame.js';
import { 
	addBreadcrumb,
	resetBreadcrumb, 
	completeGame, 
	currentPage,
	customGame,
	firstPage, 
	gameBoardLoading, 
	lastPage, 
	newGame,
	newGameLoading,
	viewer, 
	viewerLoading
} from '../Actions';

import { 
	cleanText, 
	cleanLinks, 
	dispatchNewGame,
	setupNewGame,
	setupRandomGame
} from '../Utils';

const mapStateToProps = (state) => {
	return {
		newGame: state.newGame,
		newGameLoading: state.newGameLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRandomGameClick: () => {
			setupRandomGame(dispatch);
		},
		onCustomGameClick: () => {
			dispatch(customGame(true));
		}
	};
};

const NewGameContainer = connect(mapStateToProps, mapDispatchToProps)(NewGame);

export default NewGameContainer;