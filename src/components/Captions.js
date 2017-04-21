import Highlight from 'react-highlighter'
import React, { Component } from 'react'


/**
 * Container for the caption part.
 */
export default class Captions extends Component {
	constructor(props) {
    super(props)
    this.state = {filterText: ''}
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText})
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
    )
  }
}

/**
 * SearchBar to find substrings in the captions.
 */
class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value
    )
  }
  
  render() {
    return (
      <form className="search-bar">
        <input
          type="text"
          placeholder="Search... (e.g. 'Thanks')"
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

/**
 * Filtering of caption texts.
 */
class CaptionsGrid extends React.Component {
  render() {
    var rows = []
    this.props.data.forEach((x) => {
    	// If the searched is not in the caption.
      if (x.caption.text.indexOf(this.props.filterText) === -1) return
      rows.push(<Caption search={this.props.filterText} caption={x.caption.text} key={x.id} />)
    })

    // If matching results are found, return them, otherwise output a message.
    if (rows.length > 0) {
      return (
        <div>
          {rows}
        </div>
      )  
    }
    else {
      return (
        <div className="no-results-found">
          <p>No results found.</p>
        </div>
      )
    }
    
  }
}

/**
 * Display filtered texts and highlight the searched string.
 */
const Caption = (props) => (
  <div className="caption">
  	<Highlight caseSensitive={false} matchStyle={{'color': '#0090c9'}} search={props.search}>{props.caption}</Highlight>
  </div>
)