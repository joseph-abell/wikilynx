import jsonp from 'jsonp';
import { connect } from 'react-redux';
import Header from '../Components/Header';

const mapStateToProps = (state) => {
	return {
		title: state.viewer.title, 
		content: state.viewer.content,
		firstPage: state.firstPage,
		lastPage: state.lastPage,
		completeGame: state.completeGame,
		newGame: state.newGame
	};
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;