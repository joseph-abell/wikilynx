import { GET_LAST_PAGE } from '../Actions';

const page = (state = {}, action) => {
	switch (action.type) {
		case GET_LAST_PAGE:
			return {
				name: action.name,
				content: action.content,
			};
		default:
			return state;
	}
};

export default page;