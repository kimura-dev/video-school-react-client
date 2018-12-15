import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
      <form className="form-inline mr-auto">
        <input value={this.state.term}
        onChange={e => this.onInputChange(e.target.value)} className="form-control mr-2" />
        <button className="btn btn-outline-light bg-success search-bar-btn">Search</button>
      </form>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
 
}

export default SearchBar;