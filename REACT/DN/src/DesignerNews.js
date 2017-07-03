import React from 'react';
import ReactDOM from 'react-dom';
import content from './data/content';

import StoryList from './StoryList';
import NavBar from './NavBar';

class DesignerNews extends React.Component{
	constructor(props){
		super(props);
		this.increaseUpVote=this.increaseUpVote.bind(this);
		this.starredStory=this.starredStory.bind(this);
		this.showStarredStories=this.showStarredStories.bind(this);
		//this.showAllStories=this.showAllStories.bind(this);
		this.state={
			content:content,
			starred:[]			
		}
	}
	increaseUpVote(id){
		var content=this.state.content.slice(0).map(story => Object.assign({},story));

		var story=content.find(story => story.id===id);

		story.votes=story.votes+1;
		this.setState({
			content
		});

	}
	// showAllStories(){
	// 	var content=this.state.content.slice(0).map(story => Object.assign({},story));
		
	// 	this.setState({
	// 		content:this.state.content,
	// 		starred:[]

	// 	})
	// 	console.log(content)
	// }
	starredStory(id,refId){
		var content=this.state.content.slice(0).map(story => Object.assign({},story));
		var story=content.find(story => story.id===id);

		if(ReactDOM.findDOMNode(refId).checked){
			this.state.starred.push(story);
		}

		this.setState({
			starred:this.state.starred
		})

	}
	showStarredStories(){
		
		var content=this.state.content.slice(0).map(story => Object.assign({},story));
		this.setState({
			content:this.state.starred
		})

	}
	
	render(){
		return(
			<div className="container">
				<div className="row">
			 		 <div className="col-md-12">
							<h1>{this.props.headerText}</h1> 	
					  </div>
				</div>
				<div className="row">
					<NavBar 
						showStarredStories={this.showStarredStories}
						showAllStories={this.showAllStories}
					/>
				</div>
				<div className="row">
					<StoryList
						 content={this.state.content} 
						 increaseUpVote={this.increaseUpVote}
						 starredStory={this.starredStory}
					/>
				</div>
			</div>
		);
	}
}
export default DesignerNews;