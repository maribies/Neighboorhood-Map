import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class InfoBar extends Component {
  state = {
    query: ''
  }

  updateQuery = (checkQuery) => {
  this.setState({query: checkQuery})
  this.props.onSearch(checkQuery)
  }

  render() {
    const { query } = this.props.query

    if (query) {
      let checkQuery = new RegExp(escapeRegExp(query), 'i')
      checkQuery.trim();
    }

    return (
      <div className="search">
        <form>
          <label>Search</label>
          <input value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
        </form>

        <div className="locInfo">
          <h4>Ribeira</h4>
          <img className="thumb" src="https://source.unsplash.com/photos/uo54m6kgcdl"/>
        </div>
      </div>
    );
  }
}

export default InfoBar
