import React, { Component } from 'react';
import './App.css';
import MyMapComponent from './map';
import InfoBar from './InfoBar';
import * as UnsplashAPI from './UnsplashAPI';

class App extends Component {
  state = {
    query: '',
    image: [],
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

  // searchImages = ( query ) => {
  //   UnsplashAPI.getImage( query ).then((image) => {
  //     this.setState({ image })
  //   }).catch(error => {
  //     this.setState({
  //       showError: true
  //     })
  //   })
  // }


  render() {
    return (
      <div className="App">
        <h1>My Neighborhood Map</h1>
        <InfoBar
          onSearch={this.searchImages}
          query={this.getQuery}/>
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
