import { combineReducers } from 'redux';
import lastPage from './lastPage';
import pages from './pages';

const gameApp = combineReducers({
	pages, lastPage
});

export default gameApp;