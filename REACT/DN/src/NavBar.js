import React from 'react';

class NavBar extends React.Component{
	constructor(props){
		super(props);
		this.showStarred=this.showStarred.bind(this);
		//this.showAll=this.showAll.bind(this);

	}
	showStarred(){
		this.props.showStarredStories();
	}
	// showAll(){
	// 	this.props.showAllStories();
	// }
	render(){
		return(
			<nav className="navbar navbar-inverse navbar-static-top">
			  <div className="container">
			    	<ul>	
			    		
			    		<li onClick={this.showStarred}>Starred</li>

			    	</ul>
			    	
			  </div>
			</nav>
		);
	}
}
export default NavBar;