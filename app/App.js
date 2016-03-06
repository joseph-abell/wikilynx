import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import gameApp from './Reducers';
import App from './Components/App';

let store = createStore(gameApp);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);