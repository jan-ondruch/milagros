import React, { Component } from 'react'

/**
 * Parses Instagram data feed.
 */
export default class Parser extends Component {
	/**
	 * Map links from all the arrays onto a GridTile, which renders the links 
	 * to images.
	 * How it works: take every data[0-n] object and extract from it text, image and link
	 */
	render() {
		console.log(this.props.data[0]);
		return(
			<div>
				{this.props.data.map((x) => (
          <GridTile alt={x.caption.text} link={x.images.standard_resolution.url} key={x.link} />
          // key as an unique identifier
        ))}
			</div>
		);
	}
}


/**
 * Render elements on the screen
 */ 
let GridTile = (props) => (	
	<div style={{display: 'flex', float: 'left'}}>
		<img alt={props.alt} src={props.link}></img>
	</div>
)