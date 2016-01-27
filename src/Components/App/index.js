import React from 'react';
import Body from '../Body';

export default class App extends React.Component {
  render() {
    return (
    	<div>
    		<div className="header">
				<div className="logo">Wikilynx</div>
			</div>
    		<Body />
    	</div>
    );
  }
}