import expect from 'expect';
import { createStore } from 'redux';
import gameApp from '../../app/Reducers';
import { 
	firstPage,
	lastPage,
	currentPage,
	customGame,
	viewer,
	addBreadcrumb,
	resetBreadcrumb,
	completeGame,
	newGame,
	viewerLoading,
	gameBoardLoading,
	newGameLoading,
	gameBoardFilter
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
				gameBoardFilter: '',
				firstPage: '',
				lastPage: '',
				currentPage: {
					title: '',
					links: []
				},
				customGame: false,
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

	describe('firstPage', () => {
		let store = createStore(gameApp);

		it('should set firstPage to Kanye West', () => {
			const actual = store.dispatch(firstPage('Kanye West'));
			const expected = {
				type: 'FIRST_PAGE',
				firstPage: 'Kanye West'
			};

			expect(actual).toEqual(expected);
		});

		it('should set firstPage to empty string', () => {
			store.dispatch(firstPage('Kanye West'));
			const actual = store.dispatch(firstPage(''));
			const expected = {
				type: 'FIRST_PAGE',
				firstPage: ''
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('lastPage', () => {
		let store = createStore(gameApp);

		it('should set lastPage to George Michael', () => {
			const actual = store.dispatch(lastPage('George Michael'));
			const expected = {
				type: 'LAST_PAGE',
				lastPage: 'George Michael'
			};

			expect(actual).toEqual(expected);
		});

		it('should set lastPage to George Michael', () => {
			store.dispatch(lastPage('George Michael'));
			const actual = store.dispatch(lastPage(''));
			const expected = {
				type: 'LAST_PAGE',
				lastPage: ''
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('currentPage', () => {
		let store = createStore(gameApp);

		it('should get currentPage\'s title to Shirley Bassey, and the links to an empty link', () => {
			const actual = store.dispatch(currentPage('Shirley Bassey', []));
			const expected = {
				type: 'CURRENT_PAGE',
				currentPage: {
					title: 'Shirley Bassey',
					links: []
				}
			};

			expect(actual).toEqual(expected);
		});

		it('should get currentPage\'s title set to Commodore 64, and the links to an array with Mr Potato Head, The Guardian, Rubik\'s Cube and Commodore 64 in it', () => {
			const actual = store.dispatch(currentPage('Commodore 64', ['Mr Potato Head', 'The Guardian', 'Rubik\'s Cube', 'Commodore 64']));
			const expected = {
				type: 'CURRENT_PAGE',
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

		it('should reset currentPageto empty', () => {
			store.dispatch(currentPage('Commodore 64', ['Mr Potato Head', 'The Guardian', 'Rubik\'s Cube', 'Commodore 64']));
			const actual = store.dispatch(currentPage('', []));

			const expected = {
				type: 'CURRENT_PAGE',
				currentPage: {
					title: '',
					links: []
				}
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('viewer', () => {
		let store = createStore(gameApp);

		it('should set the viewer to Barack Obama, and set the content to be "Barack Obama Banana Pyjama Pirhanna."', () => {
			const actual = store.dispatch(viewer('Barack Obama', 'Barack Obama Banana Pyjama Pirhanna'));
			const expected = {
				type: 'VIEWER',
				viewer: {
					title: 'Barack Obama',
					content: 'Barack Obama Banana Pyjama Pirhanna'
				}
			};

			expect(actual).toEqual(expected);
		});

		it('should set the viewer empty', () => {
			store.dispatch(viewer('Barack Obama', 'Barack Obama Banana Pyjama Pirhanna'));
			const actual = store.dispatch(viewer('', ''));
			const expected = {
				type: 'VIEWER',
				viewer: {
					title: '',
					content: ''
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

	describe('viewerLoading', () => {
		let store = createStore(gameApp);
		it('should set viewerLoading to true', () => {
			const actual = store.dispatch(viewerLoading(true));
			const expected = {
				type: 'VIEWER_LOADING',
				viewerLoading: true
			};

			expect(actual).toEqual(expected);
		});

		it('should set viewerLoading to false', () => {
			store.dispatch(viewerLoading(true));
			const actual = store.dispatch(viewerLoading(false));
			const expected = {
				type: 'VIEWER_LOADING',
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('gameBoardLoading', () => {
		let store = createStore(gameApp);

		it('should set gameBoardLoading to true', () => {
			const actual = store.dispatch(gameBoardLoading(true));
			const expected = {
				type: 'GAME_BOARD_LOADING',
				gameBoardLoading: true
			};

			expect(actual).toEqual(expected);
		});

		it('should set gameBoardLoading to false', () => {
			store.dispatch(gameBoardLoading(true));
			const actual = store.dispatch(gameBoardLoading(false));
			const expected = {
				type: 'GAME_BOARD_LOADING',
				gameBoardLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('newGame', () => {
		let store = createStore(gameApp);

		it('should set newGame to true', () => {
			const actual = store.dispatch(newGame(true));
			const expected = {
				type: 'NEW_GAME',
				newGame: true
			};

			expect(actual).toEqual(expected);
		});

		it('should set newGame to false', () => {
			store.dispatch(newGame(true));
			const actual = store.dispatch(newGame(false));
			const expected = {
				type: 'NEW_GAME',
				newGame: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('newGameLoading', () => {
		let store = createStore(gameApp);
		it('should set newGameLoading to true', () => {
			const actual = store.dispatch(newGameLoading(true));
			const expected = {
				type: 'NEW_GAME_LOADING',
				newGameLoading: true
			};

			expect(actual).toEqual(expected);
		});

		it('should set newGameLoading to false', () => {
			store.dispatch(newGameLoading(true));
			const actual = store.dispatch(newGameLoading(false));
			const expected = {
				type: 'NEW_GAME_LOADING',
				newGameLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('gameBoardFilter', () => {
		let store = createStore(gameApp);
		it('should set the filter to Rick Astley', () => {
			const actual = store.dispatch(gameBoardFilter('Rick Astley'));
			const expected = {
				type: 'GAME_BOARD_FILTER',
				gameBoardFilter: 'Rick Astley'
			};

			expect(actual).toEqual(expected);
		});

		it('should set the filter back to empty', () => {
			store.dispatch(gameBoardFilter('Rick Astley'));
			const actual = store.dispatch(gameBoardFilter(''));
			const expected = {
				type: 'GAME_BOARD_FILTER',
				gameBoardFilter: ''
			};

			expect(actual).toEqual(expected);		
		});
	});

	describe('customGame', () => {
		let store = createStore(gameApp);
		it('should set the filter to true', () => {
			const actual = store.dispatch(customGame(true));
			const expected = {
				type: 'CUSTOM_GAME',
				customGame: true
			};

			expect(actual).toEqual(expected);
		});

		it('should set the filter back to empty', () => {
			store.dispatch(customGame(true));
			const actual = store.dispatch(customGame(false));
			const expected = {
				type: 'CUSTOM_GAME',
				customGame: false
			};

			expect(actual).toEqual(expected);		
		});
	});
});
	