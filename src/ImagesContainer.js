import React, { Component } from 'react'



export default class ImagesContainer extends Component {
	render() {
		// images
		if (this.props.name === 'images') {
			return (
				<div id="postsGrid">
					{this.props.data.map((x) => (
				    <ImageTileContainer alt={x.caption.text} 
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
				<div id="postsGrid">
					{videoTiles}
				</div>
			);
		}
	}
}

/**
 * Container for an image.
 * State for interactive UX.
 */
class ImageTileContainer extends Component {	
	constructor(props) {
		super(props);
		this.state = {hover: false}
		this.mouseOver = this.mouseOver.bind(this);
		this.mouseOut = this.mouseOut.bind(this);
	}

	mouseOver() {
		console.log('mouseOver!');
		this.setState({hover: true});
	}

	mouseOut() {
		console.log('mouseOut!');
		this.setState({hover: false});
	}

	render() {
		let linkStyle;
		if (this.state.hover) {
			linkStyle={opacity: 0.8}
		}
		else {
			linkStyle={opacity: 1}
		}
		return (
			<div>
				<img style={linkStyle} alt={this.props.alt} src={this.props.link} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></img>
			</div>
		)
	}
}

/**
 * Renders image element on the screen.
 */
let imageTile = (props) => (
	<img alt={this.props.alt} src={this.props.link} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></img>
)

/**
 * Render elements on the screen
 */
let VideoTile = (props) => (	
	<div>
		<video style={{backgroundColor: 'black'}} width="300" height="300" controls>
  		<source src={props.src} type="video/mp4"></source>
  	</video>
	</div>
)