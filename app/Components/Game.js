import React from 'react';
import Router from 'react-router';
import FirstWiki from './Wikipedia/FirstPage';
import SecondWiki from './Wikipedia/SecondPage';
import Home from './Home';
import getPages from '../Utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://reacttutorialja.firebaseio.com/');

class Game extends React.Component {
	constructor (props) {
		super (props);

		this.state = {
			firstPage: {},
			secondPage: {}
		};
	}
	
	componentDidMount () {
		this.init();
	}

	componentWillReceiveProps (nextProps) {
		base.removeBinding(this.ref);
		this.init();
	}

	componentWilUnmount () {
		base.removeBinding(this.ref);
	}

	init () {
		this.ref = base.bindToState('games', {
			context: this,
			asArray: true,
			state: 'notes'
		});


		getPages('games').then( function (data) {
			this.setState({
				firstPage: data[0],
				secondPage: data[1]
			});
		}.bind(this));
	}

	render () {
		return (
			<div>
				<div className="row">
					<Home />
				</div>
				<div className="row">
					<div className="col-md-6">
						<FirstWiki firstPage={this.state.firstPage} />
					</div>
					<div className="col-md-6">
						<SecondWiki secondPage={this.state.secondPage} />
					</div>
				</div>
			</div>
		);
	}
};

export default Game;