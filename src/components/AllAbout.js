import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

class AllAbout extends Component {
	render() {
		return (
			<div className="header-container">
				<h1> Welcome to... Sad Georgie</h1>
				<h2> Breathe you in </h2>
				<Menu />
			</div>
		);
	}
}
export default AllAbout;
