import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import InfoBar from './InfoBar';
import * as UnsplashAPI from './UnsplashAPI';

class App extends Component {
  state = {
    query: '',
    images: [],
    showError: false,
    image: [],
    imagesCollection: {},
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
          <MapContainer/>
        </div>
      </div>

    );
  }
}

export default App;
