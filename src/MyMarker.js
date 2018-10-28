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
      //<div>
        <Marker
          position={this.props.location}
          onClick={() => this.toggle()}
        />

        // <InfoWindow onCloseClick={ this.toggle() }/>
        // {isOpen ?
        //    <div id="infowindow"><p>Ribiera</p></div> : null }
      // </div>
    )
  }
}
