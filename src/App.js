import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import InfoBar from './InfoBar';
import * as UnsplashAPI from './UnsplashAPI';

const locations = [
  { name: 'Riberia', lat: 41.140473, lng: -8.612381 },
  { name: 'Alidos', lat: 41.148183, lng: -8.611051 }
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

    // UnsplashAPI.getCollection()
    // .then((res) => {
    //   this.setState({imagesCollection})
    // })
  }

  getQuery(query){
    this.setState({query})
  }

  // getImage = (id, size) => {
  //   UnsplashAPI.getPhotoById()
  //   .then((image) => {
  //     this.setState(state => ({image: image.urls.thumb})
  //   )
  //   })
  // }

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
