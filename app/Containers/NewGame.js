import jsonp from 'jsonp';
import { connect } from 'react-redux';
import NewGame from '../Components/NewGame.js';
import { customGame } from '../Actions';

import {
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