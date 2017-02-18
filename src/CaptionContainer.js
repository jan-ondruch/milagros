import React, { Component } from 'react';
import Highlight from 'react-highlighter';


export default class CaptionContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {filterText: ''};
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <CaptionsGrid
          data={this.props.data}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value,
    );
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search... (e.g. 'love')"
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}


class CaptionsGrid extends React.Component {
  render() {
    var rows = [];
    this.props.data.forEach((x) => {
    	// if the searched is not in the caption
      if (x.caption.text.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<Caption search={this.props.filterText} caption={x.caption.text} key={x.id} />);
    });

    return (
			<div>
				{rows}
			</div>
    );
  }
}


let Caption = (props) => (
  <div>
  	<br></br>
  		<Highlight search={props.search}>{props.caption}</Highlight>
  	<br></br>
  </div>
)