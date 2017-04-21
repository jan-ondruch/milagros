import React, { Component } from 'react'


const Header = () => (
	<div className="header">
		<h1>MILAGROS</h1>
    <HeaderTextCarousel />
	</div>
)

class HeaderTextCarousel extends Component {
	constructor() {
		super()
		this.state = {tech: 'ReactJS'}
	}

	componentDidMount() {
		let techs = ['ReactJS', 'CSS3', 'Instagram API', 'Heroku']
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
			<div className="header-text-carousel">
				<h4>Instagram data based web app created with</h4>
				<h3>{this.state.tech}</h3>
			</div>
		)
	}
}

export default Header