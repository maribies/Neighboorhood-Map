import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import LocationCard from './LocationCard';

class InfoBar extends Component {
  render() {
    const {locations, collection, returnImg, returnAttr, updateFilter, tag} = this.props

    const handleChange = event => {
      updateFilter(event.target.value)
    }

    let filtered
     if (tag === null) {
      filtered = this.props.locations
    } else if (tag === "All") {
      filtered = this.props.locations
    } else if (tag !== null) {
      filtered = this.props.locations.filter(location => location.tags.find(loctag => loctag === tag))
      console.log(tag)
      console.log(filtered)
    }

    return (
      <div className="infobar">
        <div className="tags-container">
          <label>Search By Category</label>
          <select
            className="category-select"
            onChange={event => handleChange(event)}>

            <option value="All">Filter</option>
            <option value="Activities">Activities</option>
            <option value="Drinks">Drinks</option>
            <option value="Eats">Eats</option>
            <option value="History">History</option>
            <option value="Local">Local</option>
            <option value="Travel">Travel</option>
            <option value="Tourist">Tourist</option>
          </select>
        </div>

        <div className="results">
          {filtered.map(location => (
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
