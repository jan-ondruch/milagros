import React, { Component } from 'react'
import Menu from './Menu'


let MENUITEMS_CHART = ["filter", "likes", "comments"]
let MENUITEMS_POSTS = ["images", "videos"]

/**
 * 
 * We can omit here React.Component since we already imported Component.
 */
export default class InstaApi extends Component {
	/**
	 * The constructor for a React component is called before it is mounted.
	 */
	constructor() {
		super()
		this.state = {data: {}}
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
			this.setState({data: result.data})
		}

		// JSONP is a trick to overcome XMLHttpRequest same domain policy.
		// We create a script which will be executed right away and since it has a callback function,
		// it will call it, pass the data and voila!
		// That's all there is to know about JSONP: it's a callback and script tags.
		// http://stackoverflow.com/questions/5943630/basic-example-of-using-ajax-with-jsonp. 
		let script = document.createElement('script')
		script.setAttribute('src', 'https://api.instagram.com/v1/tags/workhardplayhard/media/recent?access_token=2157874055.efad13a.41abd3f6d9414a39b34e7e48f201e732&callback=instaFeed')
		document.head.appendChild(script)
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
  	// Check if object is empty - conditional rendering
  	if (!Object.keys(this.state.data).length) {
  		return (
        <div className="loading">
  			 <p>Loading data</p>
         <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
        </div>
  		)
  	} 
  	else {
  		return (
      	<div>
      		<Menu title="1. Charts"
      				  subtitle="Choose one of the Instagram information to track!" 
      					data={this.state.data}
      					menuItems={MENUITEMS_CHART}
      		/>
      		<Menu title="2. Posts"
      					subtitle="Have a look at some posts!"
      					data={this.state.data}
      					menuItems={MENUITEMS_POSTS}
      		/>
          <Menu title="3. Capitions"
                subtitle="Search for specific words I used in my posts!"
                data={this.state.data}
                menuItems={''}
          />
      	</div>
    	)
  	} 
  }
}