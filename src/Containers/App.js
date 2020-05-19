import React from 'react';
import Cardlist from '../Components/Cardlist';
import {robots} from '../robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'

class App extends React.Component {
	constructor(){
		super()
		this.state ={
			robots: robots,
			searchfield:''
		}
	}

// componentDidMount(){
// 	fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
// 		return response.json();
// 	}).then(users =>{
// 		this.setState({robots: users});
// 	})
// }

	onsearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		
	}

	render() {
		const filterRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length === 0){
			return <h3 className='tc' Style='color: #0ccac4;'>Loading</h3>
		}
		else {
		return(
		<div className='tc'>
		<h1>RoboFriends</h1>
		< SearchBox searchChange={this.onsearchChange}/>
		<Scroll>	
			<Cardlist robots={filterRobots}/>
		</Scroll>
		</div>
		);}
	}
	
}
export default App;