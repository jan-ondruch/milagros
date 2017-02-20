import React, { Component } from 'react'
import ChartContainer from './ChartContainer'
import ImagesContainer from './ImagesContainer'
import CaptionContainer from './CaptionContainer'


/**
 * Reusable menu component.
 * Components: MenuHeader, MenuBody -> MenuRow.
 */
export default class Menu extends Component {
	render() {
		return (
			<div className="menu">
				<MenuHeader title={this.props.title} subtitle={this.props.subtitle} />
				<MenuBody menuItems={this.props.menuItems} data={this.props.data} />
			</div>
		)
	}
}

Menu.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  menuItems: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array,
  ]),
  data: React.PropTypes.array
}

/**
 * Sets title and subtitle for the menu.
 */
let MenuHeader = (props) => (
	<div className="menu-header">
		<h2>{props.title}</h2>
		<h3>{props.subtitle}</h3>
	</div>
)

/**
 * Body of the menu representing buttons.
 * Buttons are rendered based on the input data.
 * Conditional rendering for different menus.
 * Dynamically controls the buttons.
 */
class MenuBody extends Component {
	constructor(props) {
		super(props)
		this.state = {value: this.props.menuItems[0]}	// chosen option to draw chart
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		// prevent clicks out of buttons and change of the active button
		if (e.target.value === undefined) {
			console.log(this.state.value);
		}
		else {
			this.setState({value: e.target.value})
		}
	}

	render() {
		let rows = []
		// if there are no options
		if (!(this.props.menuItems[0] === undefined)) {
			this.props.menuItems.forEach((menuItem) => {
				rows.push(<MenuRow key={menuItem} value={menuItem} />)
			})
		}
		// Charts 
		if (this.props.menuItems[0] === 'filter') {
			return (
				<div className="menu-items" value={this.state.value} onClick={this.handleClick}>
					{rows}
					<ChartContainer data={this.props.data} 
													name={this.state.value}
					/>
				</div>
			)	
		}
		// Images
		else if (this.props.menuItems[0] === 'images') {
			return (
				<div className="menu-items" value={this.state.value} onClick={this.handleClick}>
					{rows}
					<ImagesContainer data={this.props.data} 
													 name={this.state.value}
					/>
				</div>
			)
		}
		// Captions
		else {
			return (
				<div className="menu-items" value={this.state.value} onClick={this.handleClick}>
					{rows}
					<CaptionContainer data={this.props.data} 
														name={this.state.value}
					/>
				</div>
			)
		}	
		
	}
}

/**
 * Creates a button in the menu.
 */
let MenuRow = (props) => (
	<button id={props.value} value={props.value}>{props.value}</button>
)