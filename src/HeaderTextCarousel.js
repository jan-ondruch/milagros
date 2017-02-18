import React, { Component } from 'react'


/**
 * Changes header text every 3 seconds.
 */
export default class HeaderTextCarousel extends Component {
	constructor() {
		super()
		this.state = {tech: 'ReactJS'}
	}

	componentDidMount() {
		let techs = ['ReactJS', 'Instagram API', 'Heroku']
		let i = 0
		setInterval( () => { 
      this.setState({
      	tech: techs[i] 	
      })
      i++
      if (i >= techs.length) i = 0
    }, 3000)
	}

	render() {
		return (
			<div>
				<h3>Webapp created with: {this.state.tech}</h3>
			</div>
		)
	}
}