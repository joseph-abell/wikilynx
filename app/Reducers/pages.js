import { GET_PAGE, GET_RANDOM_PAGE_NAME } from '../Actions';

const page = (state, action) => {
	switch (action.type) {
		case GET_PAGE:
			return {
				name: action.name,
				content: action.content,
			};
		default:
			return state;
	}
};

const pages = (state = [], action) => {
	switch (action.type) {
		case GET_PAGE:
			return [
				...state,
				page(undefined, action)
			];
		case GET_RANDOM_PAGE_NAME:
			return state.map(t =>
				page(t, action)
			);
		default: 
			return state;
	}
};

export default pages;