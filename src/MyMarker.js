import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

export default class MyMarker extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(){
    const { isOpen } = this.state;

    return(
        <Marker
          position={this.props.location}
          onClick={() => this.toggle()}
        >
        {this.state.isOpen ?
          <InfoWindow onCloseClick={() => this.toggle() }>
            <div>{this.props.name}</div>
          </InfoWindow> : null }
        </Marker>
    )
  }
}
