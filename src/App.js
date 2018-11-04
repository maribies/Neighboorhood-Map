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
    showError: false,
    tag: null,
  }

  componentDidMount() {
    //decided not to use this function to retrieve random images of Porto at this time
    // UnsplashAPI.getImages()
    // .then((images) => {
    //   this.setState({images})
    // })
    // .catch(error => {
    //   this.setState({
    //     showError: true
    //   })
    // })
    //retrieves a collection of photos from porto
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

  updateFilter = (tag) => {
    this.setState({tag})
  }

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
            updateFilter={this.updateFilter}
            tag={this.state.tag}
            />
          <MapContainer
            collection={this.state.collection}
            locations={this.state.data}
            returnImg={this.returnImg}
            updateFilter={this.updateFilter}
            tag={this.state.tag}
            />
        </div>
      </div>

    );
  }
}

export default App;
