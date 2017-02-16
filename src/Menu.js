import React, { Component } from 'react';
import ChartContainer from './ChartContainer';
import ImagesContainer from './ImagesContainer';


/**
 * Reusable menu component.
 */
export default class Menu extends Component {
	render() {
		return (
			<div>
				<MenuHeader title={this.props.title} subtitle={this.props.subtitle} />
				<MenuBody menuItems={this.props.menuItems} data={this.props.data} />
			</div>
		);
	}
}

/**
 * Sets title and subtitle for the menu.
 */
let MenuHeader = (props) => (
	<div>
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
		super(props);
		this.state = {value: this.props.menuItems[0]};	// chosen option to draw chart
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({value: e.target.value})
	}

	render() {
		let rows = [];
		this.props.menuItems.forEach((menuItem) => {
			rows.push(<MenuRow key={menuItem} value={menuItem} />)
		})
		// Charts 
		if (this.props.menuItems[0] === 'filter') {
			return (
				<div value={this.state.value} onClick={this.handleClick}>
					{rows}
					<ChartContainer data={this.props.data} 
													name={this.state.value}
					/>
				</div>
			)	
		}
		// Images
		else {
			return (
			<div value={this.state.value} onClick={this.handleClick}>
				{rows}
				<ImagesContainer data={this.props.data} 
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
	<button value={props.value}>{props.value}</button>
)