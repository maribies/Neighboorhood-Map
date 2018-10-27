import React, { Component } from 'react';
import './App.css';
import MyMapComponent from './map';
import InfoBar from './InfoBar';

class App extends Component {
  state = {
    query: ''
  }

  getQuery(query){
    this.setState({query})
  }

  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <h1>My Neighborhood Map</h1>
        <InfoBar query={this.getQuery}/>
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
