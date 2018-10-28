import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import InfoBar from './InfoBar';
import * as UnsplashAPI from './UnsplashAPI';

const locations = [
  { name: 'Ribeira', lat: 41.140473, lng: -8.612381 },
  { name: 'Aliados', lat: 41.148183, lng: -8.611051 },
  { name: 'Matosinhos', lat: 41.174567, lng: -8.690689 },
  { name: 'Foz', lat: 41.147474, lng: -8.674626 },
  { name: 'Hood', lat: 41.145861, lng: -8.599972 },
]

class App extends Component {
  state = {
    query: '',
    images: [],
    showError: false,
  }

  componentDidMount() {
    UnsplashAPI.getImages()
    .then((images) => {
      this.setState({images})
    })
    .catch(error => {
      this.setState({
        showError: true
      })
    })
  }

  getQuery(query){
    this.setState({query})
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">My Neighborhood Map</h1>
        <div className="container">
          <InfoBar
            onSearch={this.searchImages}
            query={this.getQuery}/>
          <MapContainer
            locations={locations}/>
        </div>
      </div>

    );
  }
}

export default App;
