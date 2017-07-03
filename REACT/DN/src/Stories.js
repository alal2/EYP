import React from 'react';
import ReactDOM from 'react-dom';

class Stories extends React.Component{
	constructor(props){
		super(props);
		this.increaseVote=this.increaseVote.bind(this);
		this.starStory=this.starStory.bind(this);
	}
	increaseVote(){
		this.props.increaseUpVote(this.props.id);
	}
	starStory(){
		if(ReactDOM.findDOMNode(this.refs.starredInput).checked)
		{this.props.starredStory(this.props.id,this.refs.starredInput);}
	}
	render(){
		return(
			<div className="stories">
				<ul id={this.props.id}>
					<li>
						<button className="glyphicon glyphicon-chevron-up" onClick={this.increaseVote}></button>
						<span>{this.props.votes}</span>
					</li>
					<li className="story">{this.props.name}</li>
					<li ><input type="checkbox"  ref="starredInput" name="starred" className="glyphicon glyphicon-star-empty" onChange={this.starStory}/></li>
				</ul>
			</div>

		);
	}

}
export default Stories;