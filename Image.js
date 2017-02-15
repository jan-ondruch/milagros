/**
 * Parses Instagram data feed.
 */
let Parser = (props) => (
	// Map links from all the arrays onto a GridTile, which renders the links 
	// to images.
	// How it works: take every data[0-n] object and extract from it text, image and link
	<div>
		{props.data.map((x) => (
      <GridTile alt={x.caption.text} 
      					link={x.images.standard_resolution.url} 
      					key={x.id} 
      />
      // A good rule of thumb is that elements inside the map() call need keys.
    ))}
	</div>
)

/**
 * Render elements on the screen
 */ 
let GridTile = (props) => (	
	<div style={{display: 'flex', float: 'left'}}>
		<img alt={props.alt} src={props.link}></img>
	</div>
)