import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import LocationCard from './LocationCard';

export default class MyMarker extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(){
    return(
        <Marker
          animation={() => this.props.animation}
          image={this.props.imageUrl}
          position={this.props.coords}
          onClick={() => this.toggle()}
        >
        {this.state.isOpen ?
          <InfoWindow onCloseClick={() => this.toggle() }>
            <LocationCard
              location={this.props.location}
              collection={this.props.collection}
              imageUrl={this.props.imageUrl}
              isOpen={this.state}
              />
          </InfoWindow> : null }
        </Marker>
    )
  }
}
