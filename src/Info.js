import React, { Component } from 'react'


/**
 * Info part about the app.
 */
export default class Info extends Component {
	render() {
		return (
			<div className="info">
				<h2>What is this?</h2>
				<p>
					Milagros is a simple web application using Instagram API to download my Instagram posts and display the data in charts, pictures, videos or captions! 
				</p>
			</div>
		)
	}
}