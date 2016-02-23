import React from 'react';

const Main = ({history, children}) => {
	console.log(this);
	return (
		<div className="main-container">
			<nav className="navbar navbar-default" role="navigation">
				<div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
					Menu
				</div>
			</nav>
			<div className="container">
				{children}
			</div>
		</div>
	);
}	

export default Main;