import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AllAbout from './components/AllAbout';
import Menu from './components/Menu';
import NewPost from './components/NewPost';
import Posts from './components/Posts';
import { Logo, Askme } from './components/Georgie';
import './styles.scss';



class App extends Component {

 callPosts(){
    fetch("http://localhost:3001/")
        .then(res => res.text())
        .then(res => this.setState({post:  JSON.parse(res)})
        
    )
}
// this.setState({post: JSON.parse(res) }); 
componentWillMount() {
    this.callPosts();
}
	state = {
		post: [	]
	};
	addPost = x => {
		let post = [x, ...this.state.post];
		this.setState({
			post: post
		});
	};
	render() {
		return (
			<div>
				<Logo />
				<main className="main">
					<AllAbout />
					<NewPost addPost={this.addPost} />
					<Posts post={this.state.post} />
					<section> </section>
				</main>
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
