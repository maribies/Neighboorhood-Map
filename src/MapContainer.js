import React, { Component } from 'react';
import MyMap from './MyMap';

export default class MapContainer extends Component {
  render() {
    return (
      <MyMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAcPW1U92uXSNkwP0hr8LjEKwjEWhGVQms&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
