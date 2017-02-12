import React, { Component } from 'react';
import Parser from './Parser.js'

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
 		 */
		window.instaFeed = (result) => {
			this.setState({data: result});
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
	 */
  render() {
    return (
      <div>
      	<Parser data={this.state.data} />
      </div>
    );
  }
}