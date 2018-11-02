import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import InfoBar from './InfoBar';
import * as UnsplashAPI from './UnsplashAPI';

const locations = [
  { name: 'Ribeira', lat: 41.140473, lng: -8.612381, photoId: 'uo54m6kgcdI' },
  { name: 'Aliados', lat: 41.148183, lng: -8.611051, photoId: 'gVmbEiXPWiY'  },
  { name: 'Matosinhos', lat: 41.174567, lng: -8.690689, photoId: 'FXzjYoDYoGg' },
  { name: 'Foz', lat: 41.147474, lng: -8.674626, photoId:'MdB_3npfpe8' },
  { name: 'Hood', lat: 41.146146, lng: -8.606489, photoId: 'FoqDFWEU5wE' },
]

class App extends Component {
  state = {
    collection: [],
    images: [],
    query: '',
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
      console.log(image.urls.thumb)
      return image.urls.thumb || 'no image found';
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">My Neighborhood Map</h1>
        <div className="container">
          <InfoBar
            onSearch={this.searchImages}
            query={this.getQuery}/>
          <MapContainer
            collection={this.state.collection}
            locations={locations}
            returnImg={this.returnImg}/>
        </div>
      </div>

    );
  }
}

export default App;
