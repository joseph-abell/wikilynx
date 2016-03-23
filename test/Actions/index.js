import expect from 'expect';
import { createStore } from 'redux';
import gameApp from '../../app/Reducers';
import { 
	togglePlayerReady,
	getFirstPage,
	getLastPage,
	getCurrentPage,
	getViewer,
	addBreadcrumb,
	resetBreadcrumb,
	completeGame,
	toggleNewGame,
	toggleViewerLoading,
	toggleGameBoardLoading,
	toggleNewGameLoading
} from '../../app/Actions';

describe('actions', () => {
describe('store', () => {
		let store = createStore(gameApp);

		it('should get an initial state', () => {
			const actual = store.getState();
			const expected = { 
				viewer: {
					title: '',
					content: ''
				},
				firstPage: '',
				lastPage: '',
				currentPage: {
					title: '',
					links: []
				},
				breadcrumbs: [],
				completeGame: false,
				viewerLoading: false,
				gameBoardLoading: false,
				newGame: true,
				newGameLoading: false
			};
			expect(actual).toEqual(expected);
		});
	});

	describe('togglePlayerReady', () => {
		let store = createStore(gameApp);

		it('should toggle the playerReady state to true', () => {
			const actual = store.dispatch(togglePlayerReady(true));
			const expected = {
				type: 'TOGGLE_PLAYER_READY',
				playerReady: true
			};

			expect(actual).toEqual(expected);
		});

		it('should toggle the playerReady state to false', () => {
			const actual = store.dispatch(togglePlayerReady(false));
			const expected = {
				type: 'TOGGLE_PLAYER_READY',
				playerReady: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('getFirstPage', () => {
		let store = createStore(gameApp);

		it('should set firstPage to Kanye West', () => {
			const actual = store.dispatch(getFirstPage('Kanye West'));
			const expected = {
				type: 'GET_FIRST_PAGE',
				firstPage: 'Kanye West'
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('getLastPage', () => {
		let store = createStore(gameApp);

		it('should set lastPage to George Michael', () => {
			const actual = store.dispatch(getLastPage('George Michael'));
			const expected = {
				type: 'GET_LAST_PAGE',
				lastPage: 'George Michael'
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('getCurrentPage', () => {
		let store = createStore(gameApp);

		it('should get currentPage\'s title to Shirley Bassey, and the links to an empty link', () => {
			const actual = store.dispatch(getCurrentPage('Shirley Bassey', []));
			const expected = {
				type: 'GET_CURRENT_PAGE',
				currentPage: {
					title: 'Shirley Bassey',
					links: []
				}
			};

			expect(actual).toEqual(expected);
		});

		it('should get currentPage\'s title set to Commodore 64, and the links to an array with Mr Potato Head, The Guardian, Rubik\'s Cube and Commodore 64 in it', () => {
			const actual = store.dispatch(getCurrentPage('Commodore 64', ['Mr Potato Head', 'The Guardian', 'Rubik\'s Cube', 'Commodore 64']));
			const expected = {
				type: 'GET_CURRENT_PAGE',
				currentPage: {
					title: 'Commodore 64',
					links: [
						'Mr Potato Head',
						'The Guardian',
						'Rubik\'s Cube',
						'Commodore 64'
					]
				}
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('getViewer', () => {
		let store = createStore(gameApp);

		it('should set the viewer to Barack Obama, and set the content to be "Barack Obama Banana Pyjama Pirhanna."', () => {
			const actual = store.dispatch(getViewer('Barack Obama', 'Barack Obama Banana Pyjama Pirhanna'));
			const expected = {
				type: 'GET_VIEWER',
				viewer: {
					title: 'Barack Obama',
					content: 'Barack Obama Banana Pyjama Pirhanna'
				}
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('addBreadcrumb', () => {
		let store = createStore(gameApp);

		it('should add a title of the good doctor', () => {
			const actual = store.dispatch(addBreadcrumb('Dr Dre'));
			const expected = {
				type: 'ADD_BREADCRUMB',
				title: 'Dr Dre'
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('resetBreadcrumb', () => {
		let store = createStore(gameApp);

		it('should reset an already reset breadcrumb', () => {
			const actual = store.dispatch(resetBreadcrumb());
			const expected = {
				type: 'RESET_BREADCRUMB'
			};

			expect(actual).toEqual(expected);
		});

		it('should reset dirty breadcrumbs', () => {
			store.dispatch(addBreadcrumb('Poodles'));
			const actual = store.dispatch(resetBreadcrumb());
			const expected = {
				type: 'RESET_BREADCRUMB'
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('completeGame', () => {
		let store = createStore(gameApp);

		it('should set completeGame to true', () => {
			const actual = store.dispatch(completeGame(true));
			const expected = {
				type: 'COMPLETE_GAME',
				completeGame: true
			}

			expect(actual).toEqual(expected);
		});

		it('should set completeGame to false', () => {
			const actual = store.dispatch(completeGame(false));
			const expected = {
				type: 'COMPLETE_GAME',
				completeGame: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('toggleViewerLoading', () => {
		let store = createStore(gameApp);
		it('should set viewerLoading to true', () => {
			const actual = store.dispatch(toggleViewerLoading(true));
			const expected = {
				type: 'TOGGLE_VIEWER_LOADING',
				viewerLoading: true
			};

			expect(actual).toEqual(expected);
		});

		it('should set viewerLoading to false', () => {
			const actual = store.dispatch(toggleViewerLoading(false));
			const expected = {
				type: 'TOGGLE_VIEWER_LOADING',
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('toggleGameBoardLoading', () => {
		let store = createStore(gameApp);
		it('should set gameBoardLoading to true', () => {
			const actual = store.dispatch(toggleGameBoardLoading(true));
			const expected = {
				type: 'TOGGLE_GAME_BOARD_LOADING',
				gameBoardLoading: true
			};

			expect(actual).toEqual(expected);
		});

		it('should set gameBoardLoading to false', () => {
			const actual = store.dispatch(toggleGameBoardLoading(false));
			const expected = {
				type: 'TOGGLE_GAME_BOARD_LOADING',
				gameBoardLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('toggleNewGame', () => {
		let store = createStore(gameApp);
		it('should set newGame to true', () => {
			const actual = store.dispatch(toggleNewGame(true));
			const expected = {
				type: 'TOGGLE_NEW_GAME',
				newGame: true
			};

			expect(actual).toEqual(expected);
		});

		it('should set newGame to false', () => {
			const actual = store.dispatch(toggleNewGame(false));
			const expected = {
				type: 'TOGGLE_NEW_GAME',
				newGame: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('toggleNewGameLoading', () => {
		let store = createStore(gameApp);
		it('should set newGameLoading to true', () => {
			const actual = store.dispatch(toggleNewGameLoading(true));
			const expected = {
				type: 'TOGGLE_NEW_GAME_LOADING',
				newGameLoading: true
			};

			expect(actual).toEqual(expected);
		});

		it('should set newGameLoading to false', () => {
			const actual = store.dispatch(toggleNewGameLoading(false));
			const expected = {
				type: 'TOGGLE_NEW_GAME_LOADING',
				newGameLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});
});
	