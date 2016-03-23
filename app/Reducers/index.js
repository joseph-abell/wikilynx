import { combineReducers } from 'redux';
import { 
	GET_FIRST_PAGE, 
	GET_LAST_PAGE, 
	GET_CURRENT_PAGE, 
	GET_VIEWER,
	ADD_BREADCRUMB,
	COMPLETE_GAME,
	RESET_BREADCRUMB,
	TOGGLE_VIEWER_LOADING,
	TOGGLE_GAME_BOARD_LOADING,
	TOGGLE_NEW_GAME,
	TOGGLE_NEW_GAME_LOADING,
	GET_FILTER
} from '../Actions';

const firstPage = (state = '', action) => {
	switch (action.type) {
		case GET_FIRST_PAGE:
			return action.firstPage;
		default:
			return state;
	}
};

const lastPage = (state = '', action) => {
	switch (action.type) {
		case GET_LAST_PAGE:
			return action.lastPage;
		default:
			return state;
	}
};

const currentPage = (state = {title: '', links: []}, action) => {
	switch (action.type) {
		case GET_CURRENT_PAGE:
			return {
				title: action.currentPage.title,
				links: action.currentPage.links			
			};
		default:
			return state;
	}
};

const viewer = (state = {title: '', content: ''}, action) => {
	switch (action.type) {
		case GET_VIEWER:
			return {
				title: action.viewer.title,
				content: action.viewer.content
			};
		default: 
			return state;
	}
};

const breadcrumbs = (state = [], action) => {
	switch (action.type) {
		case ADD_BREADCRUMB:
			return [
				...state,
				{
					title: action.title
				}
			];
		case RESET_BREADCRUMB:
			return [];
		default:
			return state;
	}
};

const completeGame = (state = false, action) => {
	switch (action.type) {
		case COMPLETE_GAME:
			return action.completeGame;
		default:
			return state;
	}
};

const viewerLoading = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_VIEWER_LOADING:
			return action.viewerLoading;
		default:
			return state;
	}
};

const gameBoardLoading = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_GAME_BOARD_LOADING:
			return action.gameBoardLoading;
		default:
			return state;
	}
};

const newGame = (state = true, action) => {
	switch (action.type) {
		case TOGGLE_NEW_GAME:
			return action.newGame;
		default:
			return state;
	}
};

const newGameLoading = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_NEW_GAME_LOADING:
			return action.newGameLoading;
		default:
			return state;
	}
};

const filter = (state = '', action) => {
	switch (action.type) {
		case GET_FILTER:
			return action.filter;
		default:
			return state;
	}
};

const gameApp = combineReducers({
	viewer, 
	firstPage, 
	lastPage, 
	currentPage, 
	breadcrumbs, 
	completeGame, 
	viewerLoading, 
	gameBoardLoading,
	newGame,
	newGameLoading,
	filter
});

export default gameApp;