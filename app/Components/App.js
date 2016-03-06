import React from 'react';
import Page from '../Containers/Page';
import LastPage from '../Containers/LastPage';
import { connect } from 'react-redux';
import { addGame, getPage } from '../Actions';

let App = ({dispatch}) => {
	return (
		<div>
			<Page />
			<LastPage />
		</div>
	);
};

App = connect()(App);

export default App;