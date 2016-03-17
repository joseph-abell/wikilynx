export const TOGGLE_PLAYER_READY = "TOGGLE_PLAYER_READY";
export const GET_FIRST_PAGE = "GET_FIRST_PAGE";
export const GET_LAST_PAGE = "GET_LAST_PAGE";
export const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
export const GET_VIEWER = "GET_VIEWER";
export const ADD_BREADCRUMB = "ADD_BREADCRUMB";
export const RESET_BREADCRUMB = "RESET_BREADCRUMB";
export const COMPLETE_GAME = "COMPLETE_GAME";


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

export function completeGame (isCompleted) {
	return {
		type: COMPLETE_GAME,
		isCompleted: isCompleted
	};
}