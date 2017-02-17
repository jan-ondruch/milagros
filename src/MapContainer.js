import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'
import Marker from 'google-maps-react/dist/components/Marker'	// fixed code on lines 110-114

export class MapContainer extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google}
          style={{width: '100%', height: '90%'}}
          className={'map'}
          zoom={10}
          containerStyle={{}}
          centerAroundCurrentLocation={true}
          >
				</Map>
			</div>
		)
	}
}

const api = 'AIzaSyBXg2Di_u9ZKOxyHO9Bl0DMJLHL17Pb07Q';

/* hide the KEY using ENV var! */
export default GoogleApiWrapper({
  apiKey: api,
  libraries: ['places','visualization']
})(MapContainer)