export const ADD_BREADCRUMB = "ADD_BREADCRUMB";

export function addBreadcrumb (title) {
	return {
		type: ADD_BREADCRUMB,
		title: title
	};
}


export const RESET_BREADCRUMB = "RESET_BREADCRUMB";

export function resetBreadcrumb () {
	return {
		type: RESET_BREADCRUMB
	};
}


export const COMPLETE_GAME = "COMPLETE_GAME";

export function completeGame (complete) {
	return {
		type: COMPLETE_GAME,
		completeGame: complete
	};
}


export const CURRENT_PAGE = "CURRENT_PAGE";

export function currentPage (title, links) {
	return {
		type: CURRENT_PAGE,
		currentPage: {
			title: title,
			links: links
		}
	};
}

export const CUSTOM_GAME = "CUSTOM_GAME";

export function customGame (custom) {
	return {
		type: CUSTOM_GAME,
		customGame: custom
	};
}


export const FIRST_PAGE = "FIRST_PAGE";

export function firstPage (title) {
	return {
		type: FIRST_PAGE,
		firstPage: title
	};
}


export const GAME_BOARD_FILTER = "GAME_BOARD_FILTER";

export function gameBoardFilter (filter) {
	return {
		type: GAME_BOARD_FILTER,
		gameBoardFilter: filter
	};
}


export const GAME_BOARD_LOADING = "GAME_BOARD_LOADING";

export function gameBoardLoading (loading) {
	return {
		type: GAME_BOARD_LOADING,
		gameBoardLoading: loading
	};
}


export const LAST_PAGE = "LAST_PAGE";

export function lastPage (title) {
	return {
		type: LAST_PAGE,
		lastPage: title
	};
}


export const NEW_GAME = "NEW_GAME";

export function newGame (newGame) {
	return {
		type: NEW_GAME,
		newGame: newGame
	};
}


export const NEW_GAME_LOADING = "NEW_GAME_LOADING";

export function newGameLoading (loading) {
	return {
		type: NEW_GAME_LOADING,
		newGameLoading: loading
	};
}


export const VIEWER = "VIEWER";

export function viewer (title, content) {
	return {
		type: VIEWER,
		viewer: {
			title: title,
			content: content
		}
	};
}


export const VIEWER_LOADING = "VIEWER_LOADING";

export function viewerLoading (loading) {
	return {
		type: VIEWER_LOADING,
		viewerLoading: loading
	};
}
