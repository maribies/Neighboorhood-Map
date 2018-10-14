import React, { Component } from 'react';
import './App.css';
import MyMapComponent from './map';

class App extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <h1>My Neighborhood Map</h1>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `750px`, width: `750px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
      </div>

    );
  }
}

export default App;
