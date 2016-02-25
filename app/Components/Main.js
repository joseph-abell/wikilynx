import React from 'react';

const Main = ({history, children}) => {
	return (
		<div className="main-container">
			<nav className="navbar navbar-default" role="navigation">
				<div className="container" style={{marginTop: 15}}>
					<h1>Wikilynx</h1><span style={{fontSize: 14, paddingBottom: 10, display: 'inline-block'}}>Get from One Wikipedia Page to Another in the fewest steps!</span>
				</div>
			</nav>
			{children}
		</div>
	);
}	

export default Main;