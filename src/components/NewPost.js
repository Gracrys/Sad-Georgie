import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// var randomColour = '';

var colors = [
	'darkslategray',
	'blueviolet',
	'indigo',
	'midnightblue',
	'lightseagreen',
	'aqua',
	'mediumseagreen',
	'darkred'
];


class NewPost extends Component {
	state = {
		user: 'user',
		text: '',
		color: ''
	};

	render() {
		return (
			<form className="newPost" onSubmit={this.handleSubmit}>
				<label htmlFor="name">{this.state.user}:</label>
				<textarea
					onChange={this.updatetext}
					id="name"
					defaultValue={this.state.text}
				/>
				<input type="submit" onClick={this.handleSubmit} value="Enviar" />

				<button>Help me</button>
			</form>
		);
	}
	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			color: colors[Math.floor(Math.random() * 8)] 

		});
		this.props.addPost(this.state);
		console.log(this.state);
		return
	};
	updatetext = evt => {
		this.setState({
			text: evt.target.value
		});
	};
}
export default NewPost;
