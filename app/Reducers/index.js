import { combineReducers } from 'redux';
import { 
	ADD_BREADCRUMB,
	RESET_BREADCRUMB,
	REMOVE_BREADCRUMB,
	COMPLETE_GAME,
	CURRENT_PAGE, 
	CUSTOM_GAME,
	FIRST_PAGE, 
	GAME_BOARD_FILTER,
	GAME_BOARD_LOADING,
	LAST_PAGE, 
	NEW_GAME,
	NEW_GAME_LOADING,	
	VIEWER,
	VIEWER_LOADING
} from '../Actions';

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
		case REMOVE_BREADCRUMB:
			const breadcrumb = action.breadcrumb;
			let breadcrumbId;

			let newState = [];

			for (let i = 0; i < state.length; i++) {
				const testTitle = state[i].title;
				if (testTitle !== breadcrumb) {
					newState[newState.length] = {
						title: testTitle
					};
				}
			}

			return newState;
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

const currentPage = (state = {title: '', links: []}, action) => {
	switch (action.type) {
		case CURRENT_PAGE:
			return {
				title: action.currentPage.title,
				links: action.currentPage.links			
			};
		default:
			return state;
	}
};

const customGame = (state = false, action) => {
	switch (action.type) {
		case CUSTOM_GAME:
			return action.customGame;
		default:
			return state;
	}
};

const firstPage = (state = '', action) => {
	switch (action.type) {
		case FIRST_PAGE:
			return action.firstPage;
		default:
			return state;
	}
};

const gameBoardFilter = (state = '', action) => {
	switch (action.type) {
		case GAME_BOARD_FILTER:
			return action.gameBoardFilter;
		default:
			return state;
	}
};

const gameBoardLoading = (state = false, action) => {
	switch (action.type) {
		case GAME_BOARD_LOADING:
			return action.gameBoardLoading;
		default:
			return state;
	}
};

const lastPage = (state = '', action) => {
	switch (action.type) {
		case LAST_PAGE:
			return action.lastPage;
		default:
			return state;
	}
};

const newGame = (state = true, action) => {
	switch (action.type) {
		case NEW_GAME:
			return action.newGame;
		default:
			return state;
	}
};

const newGameLoading = (state = false, action) => {
	switch (action.type) {
		case NEW_GAME_LOADING:
			return action.newGameLoading;
		default:
			return state;
	}
};

const viewer = (state = {title: '', content: ''}, action) => {
	switch (action.type) {
		case VIEWER:
			return {
				title: action.viewer.title,
				content: action.viewer.content
			};
		default: 
			return state;
	}
};

const viewerLoading = (state = false, action) => {
	switch (action.type) {
		case VIEWER_LOADING:
			return action.viewerLoading;
		default:
			return state;
	}
};

const gameApp = combineReducers({
	breadcrumbs, 
	completeGame, 
	currentPage, 
	customGame,
	firstPage, 
	gameBoardFilter,
	gameBoardLoading,
	lastPage, 
	newGame,
	newGameLoading,
	viewer, 
	viewerLoading
});

export default gameApp;