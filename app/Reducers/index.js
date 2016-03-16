import { combineReducers } from 'redux';
import { 
	GET_FIRST_PAGE, 
	GET_LAST_PAGE, 
	GET_CURRENT_PAGE, 
	GET_VIEWER
} from '../Actions';

const firstPage = (state = '', action) => {
	switch (action.type) {
		case GET_FIRST_PAGE:
			return action.firstPage;
		default:
			return state;
	}
};

const lastPage = (state = '', action) => {
	switch (action.type) {
		case GET_LAST_PAGE:
			return action.lastPage.title;
		default:
			return state;
	}
};

const currentPage = (state = {title: '', links: []}, action) => {
	console.log(action);
	switch (action.type) {
		case GET_CURRENT_PAGE:
			return {
				title: action.currentPage.title,
				links: action.currentPage.links			
			};
		default:
			return state;
	}
};

const viewer = (state = {title: '', content: ''}, action) => {
	switch (action.type) {
		case GET_VIEWER:
			return {
				title: action.viewer.title,
				content: action.viewer.content
			};
		default: 
			return state;
	}
};


const gameApp = combineReducers({
	viewer, firstPage, lastPage, currentPage
});

export default gameApp;