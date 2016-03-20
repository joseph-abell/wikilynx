import React from 'react';
import Header from '../Containers/Header';
import GameBoard from '../Containers/GameBoard';
import Viewer from '../Containers/Viewer';
import Breadcrumbs from '../Containers/Breadcrumbs';
import CompletedGame from '../Containers/CompletedGame';
import NewGame from '../Containers/NewGame';

import { connect } from 'react-redux';
import { addGame, getPage } from '../Actions';

let App = ({dispatch}) => {
	return (
		<div className="container">
			<Header />
			<div className="row">
				<Breadcrumbs />
				<NewGame />
			</div>
			<div className="row">
				<GameBoard />
				<Viewer />
			</div>
			<CompletedGame />
		</div>
	);
};

App = connect()(App);

export default App;