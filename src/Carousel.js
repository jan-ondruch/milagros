import React, { Component } from 'react'

export default class TextCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {tech: 'ReactJS'};
	}

	componentDidMount() {
		let techs = ['ReactJS', 'Instagram API', 'Heroku']
		let i = 0;
		setInterval( () => { 
      this.setState({
      	tech: techs[i] 	
      });
      i++;
      if (i >= 3) i = 0;
    }, 3000);
	}

	render() {
		return (
			<div>
				<h3>Webapp created with: {this.state.tech}</h3>
			</div>
		);
	}
}