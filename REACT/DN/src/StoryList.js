import React from 'react';
import Stories from './Stories';

class StoryList extends React.Component{
	render(){
		var story=this.props.content.sort((a, b)=>b.votes-a.votes)
		.map( story=> {
	      return (
	        <Stories
	          key={story.id}
	          increaseUpVote={this.props.increaseUpVote}
	          starredStory={this.props.starredStory}
	          {...story}
	        />
	      );
     });
		return(
			<div className="col-md-8">
				{story}
			</div>

		);
	}
}
export default StoryList;