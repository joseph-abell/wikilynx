import React from 'react';
import Page from '../Containers/Page';
import LastPage from '../Containers/LastPage';
import Overlay from '../Containers/Overlay';
import Header from './Header';
import { connect } from 'react-redux';
import { addGame, getPage } from '../Actions';

let App = ({dispatch}) => {
	return (
		<div className="container">
			<Header />
			<Overlay />
			<div>
				<Page />
				<LastPage />
			</div>
		</div>
	);
};

App = connect()(App);

export default App;