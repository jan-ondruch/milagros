import React, { Component } from 'react'

export default class ImageContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// images
		if (this.props.name === 'images') {
			return (
				<div id="photos">
					{this.props.data.map((x) => (
				    <ImageTile alt={x.caption.text} 
				    					link={x.images.standard_resolution.url} 
				    					key={x.id} 
				    />
				    // A good rule of thumb is that elements inside the map() call need keys.
				  ))}
				</div>
			);
		}
		// videos
		else if (this.props.name === 'videos') {
			let videos = this.props.data.filter((x) => {
				return x.type === 'video';
			});
			let videoTiles = [];
				videos.forEach((x) => {
				videoTiles.push(<VideoTile key={x.id} src={x.videos.standard_resolution.url} />)
			})
			return (
				<div>
					{videoTiles}
				</div>
			);
		}
	}
}

/**
 * Render elements on the screen
 */
let ImageTile = (props) => (	
	<div>
		<img alt={props.alt} src={props.link}></img>
	</div>
)

/**
 * Render elements on the screen
 */
let VideoTile = (props) => (	
	<div>
		<iframe src={props.src} width="300" height="300" frameBorder="0"></iframe> 
	</div>
)