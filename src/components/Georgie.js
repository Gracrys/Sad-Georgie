import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import logo from '../sad-georgie.png';
const Logo = () => {
	return (
		<div>
			<a href="/">
				<img src={logo} alt="sad georgie logo" className="logo" />
			</a>
		</div>
	);
};

const AskMe = () => {
	return <div />;
};
export { Logo, AskMe };
