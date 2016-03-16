import React from 'react';
import Header from '../Containers/Header';
import GameBoard from '../Containers/GameBoard';
import Viewer from '../Containers/Viewer';

import { connect } from 'react-redux';
import { addGame, getPage } from '../Actions';

let App = ({dispatch}) => {
	return (
		<div className="container">
			<Header />
			<GameBoard />
			<Viewer />
		</div>
	);
};

App = connect()(App);

export default App;