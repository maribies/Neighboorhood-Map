import React, { Component } from 'react';
import './App.css';
import locations from './data/locations.json';
import MapContainer from './components/MapContainer';
import InfoBar from './components/InfoBar';
import * as UnsplashAPI from './UnsplashAPI';
require('dotenv').config();

class App extends Component {
  state = {
    collection: [],
    images: [],
    data: locations,
    query: '',
    showError: false,
    activeMarkers: null,
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
    UnsplashAPI.getCollection()
    .then((collection) => {
      this.setState({collection})
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

  returnImg = (location, collection) => {
    const image = collection.find(image => location.photoId === image.id)
      if (image) {
        return image.urls.thumb || 'no image found';
      }
      return null
  };

  returnAttr = (location, collection) => {
    const image = collection.find(image => location.photoId === image.id)
      if (image) {
        return image.user.name || 'no photographer found';
      }
      return null
  };

  render() {
    return (
      <div className="App">
        <h2 className="title">Porto, Portugal</h2>
        <div className="container">
          <InfoBar
            collection={this.state.collection}
            locations={this.state.data}
            returnImg={this.returnImg}
            returnAttr={this.returnAttr}
            onSearch={this.searchImages}
            query={this.getQuery}/>
          <MapContainer
            collection={this.state.collection}
            locations={this.state.data}
            returnImg={this.returnImg}/>
        </div>
      </div>

    );
  }
}

export default App;
