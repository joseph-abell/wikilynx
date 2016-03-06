import { combineReducers } from 'redux';
import lastPage from './lastPage';
import pages from './pages';
import overlay from './overlay';

const gameApp = combineReducers({
	pages, lastPage, overlay
});

export default gameApp;