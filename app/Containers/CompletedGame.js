import jsonp from 'jsonp';
import { connect } from 'react-redux';
import CompletedGame from '../Components/CompletedGame';

import { 
	cleanLinks, 
	cleanText, 
	dispatchResetGame, 
	dispatchRetryGame 
} from '../Utils';

const mapStateToProps = (state) => {
	return {
		breadcrumbs: state.breadcrumbs,
		completeGame: state.completeGame,
		firstPage: state.firstPage,
		lastPage: state.lastPage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRetryClick: (firstTitle, lastTitle) => {
			dispatchRetryGame(dispatch, firstTitle, lastTitle);
		},
		onResetClick: () => {
			dispatchResetGame(dispatch);
		}
	};
};

const CompletedGameContainer = connect(mapStateToProps, mapDispatchToProps)(CompletedGame);

export default CompletedGameContainer;