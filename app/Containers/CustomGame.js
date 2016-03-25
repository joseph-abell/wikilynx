import jsonp from 'jsonp';
import { connect } from 'react-redux';
import CustomGame from '../Components/CustomGame';
import { setupNewGame, setupRandomGame } from '../Utils';

import {
	customGame,
	newGameLoading
} from '../Actions';

const mapStateToProps = (state) => {
	return {
		customGame: state.customGame,
		newGame: state.newGame,
		newGameLoading: state.newGameLoading
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		onCustomGameClick: (firstPage = '', lastPage = '') => {
			dispatch(newGameLoading(true));
			if ((firstPage === '') && (lastPage === '')) {
				setupRandomGame(dispatch);
			} else if (firstPage === '') {
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=title&grnlimit=1&uselang=user/', function (err, data) {
					const keys = Object.keys(data.query.pages);
					firstPage = data.query.pages[keys[0]].title;
					setupNewGame(dispatch, firstPage, lastPage, false);
				});
			} else if (lastPage === '') {
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=title&grnlimit=1&uselang=user/', function (err, data) {
					const keys = Object.keys(data.query.pages);
					lastPage = data.query.pages[keys[0]].title;
					setupNewGame(dispatch, firstPage, lastPage, false);
				});
			} else {
				setupNewGame(dispatch, firstPage, lastPage, false);
			}
		}
	};
};

const CustomGameContainer = connect(mapStateToProps, mapDispatchtoProps)(CustomGame);

export default CustomGameContainer;