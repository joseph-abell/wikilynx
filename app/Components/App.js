import React from 'react';
import Header from '../Containers/Header';
import GameBoard from '../Containers/GameBoard';
import Viewer from '../Containers/Viewer';
import Breadcrumbs from '../Containers/Breadcrumbs';
import CompletedGameOverlay from '../Containers/CompletedGameOverlay';

import { connect } from 'react-redux';
import { addGame, getPage } from '../Actions';

let App = ({dispatch}) => {
	return (
		<div className="container">
			<Header />
			<div>
				<div className="row">
					<Breadcrumbs />
				</div>
				<div className="row">
					<GameBoard />
					<Viewer />
				</div>
			</div>
			<CompletedGameOverlay />
		</div>
	);
};

App = connect()(App);

export default App;