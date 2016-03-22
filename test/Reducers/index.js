import expect from 'expect';
import { createStore } from 'redux';
import gameApp from '../../app/Reducers';

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
	TOGGLE_NEW_GAME_LOADING
} from '../../app/Actions';

function stateBefore () {
	const store = createStore(gameApp);
	return store.getState();
}

describe('reducers', () => {
	describe('firstPage', () => {
		it('should set the firstPage to John Wayne', () => {
			const actual = gameApp(stateBefore(), {
				type: GET_FIRST_PAGE,
				firstPage: 'John Wayne'
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: 'John Wayne',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should allow resetting firstPage to empty string', () => {
			const dirtyState = gameApp(stateBefore(), {
				type: GET_FIRST_PAGE,
				firstPage: 'J.K. Rowling'
			});

			const actual = gameApp(dirtyState, {
				type: GET_FIRST_PAGE,
				firstPage: ''
			});

			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('lastPage', () => {
		it('should set the lastPage to Superman', () => {
			const actual = gameApp(stateBefore(), {
				type: GET_LAST_PAGE,
				lastPage: 'Superman'
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: 'Superman',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should allow resetting lastPage to empty string', () => {
			const dirtyState = gameApp(stateBefore(), {
				type: GET_LAST_PAGE,
				lastPage: 'Gandalf'
			});

			const actual = gameApp(dirtyState, {
				type: GET_LAST_PAGE,
				lastPage: ''
			});

			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});
});