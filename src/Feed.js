import React, { Component } from 'react';


/** 
 * JSONP is a trick to overcome XMLHttpRequest same domain policy.
 * We create a script which will be executed right away and since it has a callback function,
 * it will call it, pass the data and voila!
 * That's all there is to know about JSONP: it's a callback and script tags.
 * http://stackoverflow.com/questions/5943630/basic-example-of-using-ajax-with-jsonp.
 */
var script = document.createElement('script');
script.setAttribute('src', 'https://api.instagram.com/v1/tags/workhardplayhard/media/recent?access_token=2157874055.efad13a.41abd3f6d9414a39b34e7e48f201e732&callback=instaFeed');
document.head.appendChild(script);

/** 
 * Callback function to get the data feed.
 */
window.instaFeed = function(data) {
	console.log(data.data[0].link);
}

export default class Feed extends Component {

  render() {
    return (
      <div>
      	<p>so what</p>
      </div>
    );
  }
}


/* TOKEN: 
#access_token=2157874055.efad13a.41abd3f6d9414a39b34e7e48f201e732
2157874055.efad13a 

this works:
https://api.instagram.com/v1/tags/workhardplayhard/media/recent?access_token=2157874055.efad13a.41abd3f6d9414a39b34e7e48f201e732

Jan Ondruch @janondruch
User ID: 2157874055
*/