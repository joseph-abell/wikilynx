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
			id: "",
			firstWiki: "",
			secondWiki: ""
		};
	}
	
	componentDidMount () {
		this.init(this.props.params.id);
	}

	componentWillReceiveProps (nextProps) {
		base.removeBinding(this.ref);
		this.init(nextProps.params.id);
	}

	componentWilUnmount () {
		base.removeBinding(this.ref);
	}

	handleAddResult (newResult) {
		base.post(this.props.params.id, {
			data: this.state.notes.concat([newNote])
		});
	}

	init (id) {
		this.ref = base.bindToState(id, {
			context: this,
			asArray: true,
			state: 'notes'
		});

		getPages(id).then( function (data) {
			this.setState({
				firstWiki: data.firstWiki,
				secondWiki: data.secondWiki
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
						<FirstWiki id={this.props.params.id} firstWiki={this.state.firstWiki} />
					</div>
					<div className="col-md-6">
						<SecondWiki id={this.props.params.id} secondWiki={this.state.secondWiki} />
					</div>
				</div>
			</div>
		);
	}
};

export default Game;