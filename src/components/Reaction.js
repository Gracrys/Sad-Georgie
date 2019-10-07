import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Reactions extends Component {
	state = { liked: false };

	render() {
		const label = this.state.liked ? 'Unlike' : 'Like';
		return (
			<div className="reactions">
				<button onClick={this.handleClick}>{label} </button>
        <button onClick={this.handleClick}>Sad </button>
        <button onClick={this.handleClick}>Sad </button>
			</div>
		);
	}
	handleClick = () => {
		this.setState({
			liked: !this.state.liked
		});
	};
}
export default Reactions;
