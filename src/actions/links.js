import { 
	ADD_LINK, 
	REMOVE_LINK 
} from '../constants/ActionTypes';

export function addLink (text) {
	return { type: types.ADD_TODO, text: text };
}

export function removeLink (id) {
	return {type: types.DELETE_LINK, id: id };
}