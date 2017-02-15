import React, { Component } from 'react'

export default class ImageContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div id="photos">
				{this.props.data.map((x) => (
			    <GridTile alt={x.caption.text} 
			    					link={x.images.standard_resolution.url} 
			    					key={x.id} 
			    />
			    // A good rule of thumb is that elements inside the map() call need keys.
			  ))}
			</div>
		);
	}
}

/**
 * Render elements on the screen
 */
let GridTile = (props) => (	
	<div>
		<img alt={props.alt} src={props.link}></img>
	</div>
)