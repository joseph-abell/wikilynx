import jsonp from 'jsonp';
import { connect } from 'react-redux';
import CompletedGame from '../Components/CompletedGame';

import { 
	cleanLinks, 
	cleanText, 
	resetGame, 
	retryGame 
} from '../Utils';

const mapStateToProps = (state) => {
	return {
		breadcrumbs: state.breadcrumbs,
		completeGame: state.completeGame,
		firstTitle: state.firstPage,
		lastTitle: state.lastPage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRetryClick: (firstTitle, lastTitle) => {
			retryGame(dispatch, firstTitle, lastTitle);
		},
		onResetClick: () => {
			resetGame(dispatch);
		}
	};
};

const CompletedGameContainer = connect(mapStateToProps, mapDispatchToProps)(CompletedGame);

export default CompletedGameContainer;