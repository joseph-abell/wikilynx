import React from 'react';

import Breadcrumbs from '../Containers/Breadcrumbs';
import CompletedGame from '../Containers/CompletedGame';
import CustomGame from '../Containers/CustomGame';
import Footer from './Footer.js';
import GameBoard from '../Containers/GameBoard';
import Header from '../Containers/Header';
import NewGame from '../Containers/NewGame';
import Viewer from '../Containers/Viewer';

import { connect } from 'react-redux';

let App = ({dispatch}) => {
	return (
		<div>
			<div className="container">
				<Header />
				<NewGame />
				<CustomGame />
				<CompletedGame />
				<div className="row">
					<GameBoard />
					<Viewer />
					<div style={{clear: 'both'}} />
				</div>
				<Breadcrumbs />
				<div style={{clear: 'both'}} />
				<Footer />
			</div>
		</div>
	);
};

App = connect()(App);

export default App;