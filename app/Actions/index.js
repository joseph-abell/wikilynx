export const TOGGLE_PLAYER_READY = "TOGGLE_PLAYER_READY";
export const GET_FIRST_PAGE = "GET_FIRST_PAGE";
export const GET_LAST_PAGE = "GET_LAST_PAGE";
export const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
export const GET_VIEWER = "GET_VIEWER";
export const GET_FILTER = "GET_FILTER";
export const ADD_BREADCRUMB = "ADD_BREADCRUMB";
export const RESET_BREADCRUMB = "RESET_BREADCRUMB";
export const COMPLETE_GAME = "COMPLETE_GAME";
export const TOGGLE_VIEWER_LOADING = "TOGGLE_VIEWER_LOADING";
export const TOGGLE_GAME_BOARD_LOADING = "TOGGLE_GAME_BOARD_LOADING";
export const TOGGLE_NEW_GAME = "TOGGLE_NEW_GAME";
export const TOGGLE_NEW_GAME_LOADING = "TOGGLE_NEW_GAME_LOADING";


export function togglePlayerReady (playerReady) {
	return {
		type: TOGGLE_PLAYER_READY,
		playerReady: playerReady
	};
}

export function getFirstPage (title) {
	return {
		type: GET_FIRST_PAGE,
		firstPage: title
	};
}

export function getLastPage (title) {
	return {
		type: GET_LAST_PAGE,
		lastPage: title
	};
}

export function getCurrentPage (title, links) {
	return {
		type: GET_CURRENT_PAGE,
		currentPage: {
			title: title,
			links: links
		}
	};
}

export function getViewer (title, content) {
	return {
		type: GET_VIEWER,
		viewer: {
			title: title,
			content: content
		}
	};
}

export function addBreadcrumb (title) {
	return {
		type: ADD_BREADCRUMB,
		title: title
	};
}

export function resetBreadcrumb () {
	return {
		type: RESET_BREADCRUMB
	};
}

export function completeGame (completeGame) {
	return {
		type: COMPLETE_GAME,
		completeGame: completeGame
	};
}

export function toggleViewerLoading (loading) {
	return {
		type: TOGGLE_VIEWER_LOADING,
		viewerLoading: loading
	};
}

export function toggleGameBoardLoading (loading) {
	return {
		type: TOGGLE_GAME_BOARD_LOADING,
		gameBoardLoading: loading
	};
}

export function toggleNewGame (newGame) {
	return {
		type: TOGGLE_NEW_GAME,
		newGame: newGame
	};
}

export function toggleNewGameLoading (newGameLoading) {
	return {
		type: TOGGLE_NEW_GAME_LOADING,
		newGameLoading: newGameLoading
	};
}

export function getFilter (filter) {
	return {
		type: GET_FILTER,
		filter: filter
	};
}