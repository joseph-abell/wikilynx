import React from 'react';
import './wiki.scss';
import WikiTitle from '../WikiTitle';
import WikiBody from '../WikiBody';


export default () => {
	return (
		<div className="wiki">
			<WikiTitle title />
			<WikiBody url />
		</div>
	);
};