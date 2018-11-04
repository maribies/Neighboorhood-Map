import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import LocationCard from './LocationCard';

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
    const {locations, collection, returnImg, returnAttr} = this.props

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

        <div className="results">
          {locations.map(location => (
            <LocationCard
              location={location}
              collection={collection}
              imageUrl={returnImg(location, this.props.collection)}
              photographer={returnAttr(location, this.props.collection)}
              key={location.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default InfoBar
