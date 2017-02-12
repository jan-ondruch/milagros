import React, { Component } from 'react'

export default class Parser extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<p>Parser data: {console.log(JSON.parse(JSON.stringify(this.props.data)))}</p>
		);
	}
}