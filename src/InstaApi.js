import React, { Component } from 'react';
import ChartContainer from './ChartContainer';


let MENUITEMS = ["filter", "likes", "comments"];

/**
 * 
 * We can omit here React.Component since we already imported Component.
 */
export default class InstaApi extends Component {
	/**
	 * The constructor for a React component is called before it is mounted.
	 */
	constructor() {
		super();
		this.state = {data: {}};
	}

	/**
	 * This method is only called one time, which is after the initial render. 
	 * If you need to load data from a remote endpoint, this is a good place 
	 * to instantiate the network request.
	 * Great for AJAX calls and API functions.
	 */
	componentDidMount() {
		/** 
 		 * Callback function to get the data feed.
 		 * We need to use state since the function is the callback function 
 		 * is asynchronous.
 		 * We call .window because that the context the function has.
 		 */
		window.instaFeed = (result) => {
			this.setState({data: result.data});
		}

		// JSONP is a trick to overcome XMLHttpRequest same domain policy.
		// We create a script which will be executed right away and since it has a callback function,
		// it will call it, pass the data and voila!
		// That's all there is to know about JSONP: it's a callback and script tags.
		// http://stackoverflow.com/questions/5943630/basic-example-of-using-ajax-with-jsonp. 
		let script = document.createElement('script');
		script.setAttribute('src', 'https://api.instagram.com/v1/tags/workhardplayhard/media/recent?access_token=2157874055.efad13a.41abd3f6d9414a39b34e7e48f201e732&callback=instaFeed');
		document.head.appendChild(script);
	}

	/**
   * render() method should always only render and minimize the logic inside
   * We use here conditional rendering, because we have to wait for data to
   * pass on to the Parser component. state is the control element here.
   * If we didn't do it, then we need to check in the Parser component for
   * object emptiness / if it's undefined, we would however need to do it in
   * all child components.
	 */
  render() {
  	// Check if object is empty
  	if (!Object.keys(this.state.data).length) {
  		return (
  			<p>Loading data...</p>
  		);
  	} 
  	else {
  		return (
      	<div>
      		<MenuTable name="Chart menu" 
      							 data={this.state.data}
      							 menuItems={MENUITEMS}
      		/>
      	</div>
    	);
  	} 
  }
}

/**
 * Encapsulates the whole table.
 */
class MenuTable extends Component {
	render() {
		return (
			<div>
				<MenuHeader name={this.props.name} />
				<MenuBody menuItems={this.props.menuItems} data={this.props.data} />
			</div>
		);
	}
}

/**
 * Sets header name for the menu.
 */
let MenuHeader = (props) => (
	<h2>{props.name}</h2>
)

/**
 * 
 */
class MenuBody extends Component {
	constructor(props) {
		super(props);
		this.state = {value: this.props.menuItems[0]};	// chosen item to draw chart
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({value: e.target.value})
	}

	// Separate container component from presentional component (render those buttons in another component)
	render() {
		return (
			<div value={this.state.value} onClick={this.handleClick}>
				<button value={this.props.menuItems[0]}>{this.props.menuItems[0]}</button>
				<button value={this.props.menuItems[1]}>{this.props.menuItems[1]}</button>
				<button value={this.props.menuItems[2]}>{this.props.menuItems[2]}</button>
				<ChartContainer data={this.props.data} 
												name={this.state.value}
				/>
			</div>
		)
	}
}