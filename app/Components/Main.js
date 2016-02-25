import React from 'react';

const Main = ({history, children}) => {
	return (
		<div className="main-container">
			<nav className="navbar navbar-default" role="navigation">
				<div className="container" style={{marginTop: 15}}>
					Get from One Wikipedia Page to Another in the fewest steps!
				</div>
			</nav>
			<div className="container">
				{children}
			</div>
		</div>
	);
}	

export default Main;