import React, { component } from 'react';
import ReactDOM from 'react-dom';
import Reactions from './Reaction';

const Posts = ({ post }) => {
	return (
		<div className="Post">
			{post.map(post => {
				const colors = [
					'darkslategray',
					'blueviolet',
					'indigo',
					'midnightblue',
					'lightseagreen',
					'aqua',
					'mediumseagreen',
					'darkred'
				];
				//const randomColour = colors[Math.floor(Math.random() * 8)] + '-text';
				return (
					<div className={'post-container ' + post.color + '-text'}>
						<p>{post.user + ':'}</p>
						<section>
							<i>{'\t' + post.text}</i>
						</section>
						<Reactions />
					</div>
				);
			})}
		</div>
	);
};
export default Posts;
