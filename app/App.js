import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './Components/Main';
import Home from './Components/Home';
import Game from './Components/Game';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="Game/Random" component={Game} />
			<IndexRoute component={Game} />
		</Route>
	</Router>,
	document.getElementById('app')
);