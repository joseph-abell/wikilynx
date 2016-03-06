import { TOGGLE_PLAYER_READY } from '../Actions';

const overlay = (state = {}, action) => {
	switch (action.type) {
		case TOGGLE_PLAYER_READY:
			return {
				playerReady: action.playerReady
			};
		default:
			return state;
	}
};

export default overlay;