export const GET_PAGE = "GET_PAGE";
export const GET_LAST_PAGE = "GET_LAST_PAGE";
export const TOGGLE_PLAYER_READY = "TOGGLE_PLAYER_READY";

export function getPage (name, content) {
	return { 
		type: GET_PAGE, 
		name: name, 
		content: content
	};
}

export function getLastPage (name, content) {
	return {
		type: GET_LAST_PAGE,
		name: name,
		content: content
	};
}

export function togglePlayerReady (playerReady) {
	return {
		type: TOGGLE_PLAYER_READY,
		playerReady: playerReady
	};
}