import React, { Component } from 'react';
import MyMap from './MyMap';

const apiKey = process.env.REACT_APP_MAPS_KEY;

export default class MapContainer extends Component {

  render() {
    return (
      <MyMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `50vh`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        collection={this.props.collection}
        locations={this.props.locations}
        returnImg={this.props.returnImg}
      />
    );
  }
}
